import React, {useEffect, useRef, useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import {PinchGestureHandler, State} from "react-native-gesture-handler";
import Animated, {block, cond, eq, set, useCode, Value} from "react-native-reanimated";
import {onGestureEvent, pinchActive, pinchBegan, timing, transformOrigin, translate, vec} from "react-native-redash";

const FitImage = ({source, height, width, style, children, zoomable, imageStyles}) => {
  const [dimensions, setDimensions] = useState({
    imageWidth: 0,
    imageHieght: 0,
  });
  useEffect(() => {
    executeImage();
  }, [source]);

  const adjustImage = (ratio, sourceWidth, sourceHeight) => {
    const imageWidth = ratio * sourceWidth;
    const imageHieght = ratio * sourceHeight;
    setDimensions({imageWidth, imageHieght});
  };

  const getImageSize = (uri) => {
    return new Promise((resolve, reject) => {
      Image.getSize(uri, (w, h) => {
        resolve({
          sourceWidth: w,
          sourceHeight: h,
        });
      }),
        reject;
    });
  };
  const executeImage = async () => {
    getImageSize(source.uri).then((ev) => {
      let ratio = 0;
      const {sourceWidth, sourceHeight} = ev;
      if (sourceWidth > 0 && sourceHeight > 0) {
        if (width && height) {
          ratio = Math.min(width / sourceWidth, height / sourceHeight);
        } else if (width) {
          ratio = width / sourceWidth;
        } else if (height) {
          ratio = height / sourceHeight;
        }
      }

      adjustImage(ratio.toFixed(3), sourceWidth, sourceHeight);
    });
  };

  const styles = () =>
    StyleSheet.create({
      container: {
        width: dimensions.imageWidth,
        height: dimensions.imageHieght,
        ...style,
      },
      image: {
        ...StyleSheet.absoluteFill,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        ...imageStyles,
      },
    });
  const SIZEX = dimensions.imageWidth;
  const SIZEY = dimensions.imageHieght;
  const state = new Value(State.UNDETERMINED);
  const pinchRef = useRef(PinchGestureHandler);
  const origin = vec.createValue(0, 0);
  const pinch = vec.createValue(0, 0);
  const focal = vec.createValue(0, 0);
  const scale = new Value(1);
  const numberOfPointers = new Value(0);
  const pinchGestureHandler = onGestureEvent({
    numberOfPointers,
    scale,
    state,
    focalX: focal.x,
    focalY: focal.y,
  });
  const zIndex = cond(eq(state, State.ACTIVE), 113, 110);
  const adjustedFocal = vec.add(
    {
      x: -SIZEX / 2,
      y: -SIZEY / 2,
    },
    focal,
  );
  useCode(
    () =>
      block([
        cond(pinchBegan(state), [vec.set(origin, adjustedFocal)]),
        cond(pinchActive(state, numberOfPointers), vec.set(pinch, vec.minus(vec.sub(origin, adjustedFocal)))),
        cond(eq(state, State.END), [
          set(pinch.x, timing({from: pinch.x, to: 0})),
          set(pinch.y, timing({from: pinch.y, to: 0})),
          set(scale, timing({from: scale, to: 1})),
        ]),
      ]),
    [adjustedFocal, numberOfPointers, origin, pinch, scale, state],
  );

  return (
    <View style={styles().container}>
      {zoomable && dimensions.imageWidth > 0 ? (
        <Animated.View
          style={{
            zIndex,
            width: dimensions.imageWidth,
            height: dimensions.imageHieght,
          }}
        >
          <PinchGestureHandler ref={pinchRef} {...pinchGestureHandler}>
            <Animated.View style={{...StyleSheet.absoluteFill, ...style}}>
              <Animated.Image
                style={[
                  styles().image,
                  {
                    transform: [...translate(pinch), ...transformOrigin(origin, {scale})],
                  },
                ]}
                source={source}
              />
            </Animated.View>
          </PinchGestureHandler>
        </Animated.View>
      ) : (
        <Image source={source} style={[styles().image]} />
      )}
      {children}
    </View>
  );
};

export default FitImage;
