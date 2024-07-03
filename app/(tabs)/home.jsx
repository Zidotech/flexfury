import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl " key={item.id}>
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View>
              <Text className="font-lregular text-base text-primary-DEAFULT">
                Good Morning 🔥
              </Text>
              <Text className="text-2xl font-lbold text-primary-DEAFULT">
                Zido
              </Text>
            </View>

            {/* <SearchInput /> */}

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-lregular text-primary-DEAFULT mb-3">
                Popular Workouts
              </Text>

              {/* <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} /> */}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default home;
