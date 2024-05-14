import React from "react";
import { Image, Text, View, Platform, TouchableOpacity } from "react-native";

const CardSomething = (prop) => {
  const { img, number, deliveredOrPending, color, route } = prop;
  return (
    <View className=" w-[42%] shadow-gl   bg-[#FFFFFE]  ml-5  rounded-xl  ">
      <TouchableOpacity className="w-full h-full" onPress={route}>
        <Image className=" w-[64%] h-[57%] ml-[13%] mt-5" source={img} />

        <Text className="text-lg  mt-3 ml-[25%]">{deliveredOrPending}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardSomething;
