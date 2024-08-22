import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Carousel,
  ExercisingBodyParts,
  Popular,
  SearchInput,
} from "../../components";
import CarouselS from "../../components/Carousels";

const home = () => {
  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   // re call vid
  //   setRefreshing(false);
  // };
  return (
    <SafeAreaView className="bg-primary-bg h-full ">
      <View className="my-6 px-4 space-y-6">
        <View>
          <Text className="font-lregular text-base text-primary-DEAFULT">
            Good Morning 🔥
          </Text>
          <Text className="text-2xl font-lbold text-primary-DEAFULT">Zido</Text>
        </View>

        <SearchInput />
      </View>

      <View className="px-4">
        <Text className="text-xl font-lregular text-primary-DEAFULT mb-3">
          Popular Workouts
        </Text>
      </View>

      <View className=" flex-1">
        <CarouselS />
        <ExercisingBodyParts />
      </View>
    </SafeAreaView>
  );
};

export default home;
