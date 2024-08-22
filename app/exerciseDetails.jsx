import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const exerciseDetails = () => {
  const item = useLocalSearchParams();
  //console.log("items gotten", item);

  const router = useRouter();
  return (
    <SafeAreaView className="flex flex-1 bg-primary-DEAFULT h-full">
      <View className="flex flex-row items-center gap-x-5 px-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="rounded-full  mx-2 left-0"
          style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(3) }}
        >
          <Anticons name="closecircle" size={hp(4.5)} color="#FFFFFF" />
        </TouchableOpacity>

        <Text className="text-white leading-6 text-base">Workout Details</Text>
      </View>

      <View className="mt-6 flex items-center justify-center w-full">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(70), height: wp(70) }}
          className="rounded-lg"
        />
      </View>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3.5) }}
        >
          {item?.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          className=" text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
        >
          Equipment{" "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          className=" text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
        >
          Secondary Muscles{" "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          className=" text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}
        >
          Target Muscles{" "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3) }}
        >
          Instructions
        </Animated.Text>

        {item.instructions.split(",").map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay((index + 6) * 100)
                .duration(300)
                .springify()}
              key={index}
              style={{ fontSize: hp(1.7) }}
              className=" text-neutral-800"
            >
              {" "}
              {instruction}{" "}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default exerciseDetails;
