import React from "react";
import { View, Text } from "react-native";

const StatusMessage = ({ message, color }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 10,
        backgroundColor: "#fff", // Ensure the background color to avoid content being hidden
      }}
    >
      <Text style={{ textAlign: "center", color, fontSize: 18 }}>
        {message}
      </Text>
    </View>
  );
};

export default StatusMessage;
