import React, { useEffect, useRef } from "react";
import {
  Image,
  Text,
  View,
  Platform,
  Animated,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const HomeDemandsCard = (prop) => {
  const { matrecule, name, place, Number, color, route } = prop;
  const Circle = ({ color = "F6995C", size = 40 }) => (
    <View
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: size / 2,
        marginLeft: 15,
        marginTop: 20,
      }}
    />
  );
  const CircleOpacity = ({ color = "#F6995C", size = 40 }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      const animation = Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 0.8,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000, // Adjust the duration as needed
          useNativeDriver: true,
        }),
      ]);

      const loopAnimation = Animated.loop(animation);

      loopAnimation.start();

      return () => {
        loopAnimation.stop();
      };
    }, []);

    const scaleStyle = {
      transform: [{ scale: scaleValue }],
    };

    return (
      <Animated.View
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity: 0.2,
          ...scaleStyle,
          marginLeft: 10, // Adjust according to your layout
          top: -25, // Adjust according to your layout
        }}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={route}
      className="shadow-gl h-[95%] w-[90%] mt-3 bg-[#FFFFFE] rounded-xl ml-5"
      style={Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
        default: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
      })}
    >
      <View className="flex flex-row w-full">
        <View className="w-1/5">
          <Circle color="red" size={20} />
          <CircleOpacity color="red" size={30} />
        </View>
        <View className="w-4/5">
          <Text className="text-xl mt-1 text-bold text-blue-500">
            Commandes
          </Text>
          <Text className="text-lg mt-2 font-normal">
            View your last order details.
          </Text>
          <Text className="text-lg mt-2 font-normal">
            The number of new commande: {Number}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeDemandsCard;
