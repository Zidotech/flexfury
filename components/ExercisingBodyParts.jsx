import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown, Easing } from "react-native-reanimated";
import { image } from "../constants";

const bodyParts = [
  { name: "lower arms", image: image.lowerArms, difficulty: "intermediate" },
  { name: "lower legs", image: image.lowerLegs, difficulty: "Beginner" },
  { name: "neck", image: image.neck, difficulty: "Legend" },
  { name: "back", image: image.back, difficulty: "Beginner" },
  { name: "cardio", image: image.cardio, difficulty: "Expert" },
  { name: "chest", image: image.chest, difficulty: "intermediate" },
  { name: "shoulders", image: image.shoulders, difficulty: "Expert" },
  { name: "upper arms", image: image.upperArms, difficulty: "Beginner" },
  { name: "upper legs", image: image.upperLegs, difficulty: "intermediate" },
  { name: "waist ", image: image.waist, difficulty: "Expert" },
];

const ExercisingBodyParts = () => {
  const router = useRouter();
  return (
    <View className="mx-4 flex-1">
      <Text className="font-bold text-neutral-700 text-[20px] font-lbold">
        Today Plan
      </Text>

      <FlatList
        data={bodyParts}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, paddingTop: 20 }}
        renderItem={({ item, index }) => (
          <ExerciseBodyPartCard item={item} router={router} index={index} />
        )}
      />
    </View>
  );
};

const ExerciseBodyPartCard = ({ item, index, router }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 100)
        .springify()}
    >
      <View
        className=" mb-6 flex  justify-center bg-white px-4 rounded-lg"
        style={{ width: wp(90), height: hp(12) }}
      >
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/exercises", params: item })}
          // style={{ width: wp(90), height: hp(10) }}
          className=" flex flex-row items-center gap-x-5"
        >
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: wp(20), height: wp(20) }}
            className=" rounded-md"
          />
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "#18181b"]}
            style={{ width: wp(20), height: wp(20) }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.9, y: 0.8 }}
            className="absolute bottom-0 rounded-md"
          />
          <Text
            //   style={{ fontSize: hp(2.3) }}
            className="text-primary-DEAFULT capitalize font-medium font-lregular text-center tracking-wide text-[16px]"
          >
            {item?.name}
          </Text>
          <View className="absolute top-0 right-0 bg-primary-DEAFULT p-[6px] rounded-b-md">
            <Text
              //   style={{ fontSize: hp(2.3) }}
              className="text-white capitalize font-medium font-lregular text-center tracking-wide text-[13px] "
            >
              {item?.difficulty}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ExercisingBodyParts;
