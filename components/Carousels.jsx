import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";
import { image } from "../constants";
import Carousel from "react-native-reanimated-carousel";

const carouselImages = [
  image.carousela,
  image.carouselc,
  image.carouselb,
  image.carouseld,
];

const PAGE_WIDTH = Dimensions.get("window").width;

const CarouselS = () => {
  const progress = useSharedValue(0);
  const ref = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={PAGE_WIDTH}
        height={PAGE_WIDTH * 0.6}
        data={carouselImages}
        loop={true}
        autoPlay={true}
        pagingEnabled={true}
        scrollAnimationDuration={1500}
        snapEnabled={true}
        mode="parallax" // Parallax mode
        modeConfig={{
          parallaxScrollingScale: 0.91, // Scale of the item while scrolling
          parallaxScrollingOffset: 75, // Offset of the item during scrolling
        }}
        renderItem={({ index }) => (
          <SBItem index={index} img={carouselImages[index]} />
        )}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
      />
    </View>
  );
};

const SBItem = ({ index, img }) => {
  const [isPretty, setIsPretty] = useState(false);

  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View style={styles.itemContainer}>
        <SBImageItem index={index} img={img} />
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const SBImageItem = ({ img, index }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        className="w-[88%] h-[100%] rounded-lg"
        source={img}
        cachePolicy={"memory-disk"}
      />
      {/* <Text style={styles.indexText}>{index}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: PAGE_WIDTH * 0.62,
  },
  itemContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
  },

  indexText: {
    position: "absolute",
    color: "#6E6E6E",
    fontSize: 40,
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingTop: 2,
  },
});

export default CarouselS;
