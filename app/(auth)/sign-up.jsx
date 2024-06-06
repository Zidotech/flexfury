import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../constants";

const SignUn = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full flex justify-center min-h-[86vh] px-4 my-6">
          <Image
            source={image.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUn;
