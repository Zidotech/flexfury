import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ExerciseList } from "../components";
import { fetchExercisesBodyPart } from "../api/exerciseDB.js";
import { ScrollView } from "react-native-virtualized-view";

const exercises = () => {
  const [exercise, setExercise] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams();
  //console.log("items gotten", item);

  useEffect(() => {
    if (item?.name) getExercises(item.name);
  }, []);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesBodyPart(bodypart);
    //console.log("got data: ", data);
    setExercise(data);
  };
  return (
    <SafeAreaView className="bg-primary-DEAFULT h-full">
      <StatusBar style="light" />
      <ScrollView>
        <Image
          source={item.image}
          style={{ width: wp(100), height: hp(45) }}
          className="rounded-b-[40px]"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className=" bg-primary-100 rounded-full flex items-center justify-center mx-4 absolute pr-1"
          style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(4) }}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity>

        <View className="mx-4 space-y-3 mt-4">
          <Text className="font-bold  text-[24px] font-lbold text-white leading-7 capitalize">
            {item?.name}
          </Text>

          <View className="mb-10">
            <ExerciseList data={exercise} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default exercises;
