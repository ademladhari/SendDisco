import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../redux/actions/actionAuth"; // Import your sendMessage action

const ChatScreen = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages); // Assuming you have a messages reducer
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch messages on component mount or any other logic
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      dispatch(sendMessage(newMessage));
      setNewMessage(""); // Clear the input field after sending the message
    }
  };

  let listItemStyle = {
    backgroundColor: "rgba(150,150,150,0.7)",
    height: 85,
    width: "100%",
    titleColor: "blue",
    titleFont: { fontSize: 22 },
  };

  let statusIndicatorStyle = {
    height: 40,
    width: 40,
  };

  let avatarStyle = {
    border: { borderWidth: 1 },
    height: 65,
    width: 65,
    borderRadius: 20,
  };

  let name = "Iron Man";

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            padding: 10,
          }}
          placeholder="Type your message here"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />

        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
