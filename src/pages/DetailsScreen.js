import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { confirmCommande } from "../services/ServiceData";
import StatusMessage from "../components/statusMessage";

const DetailsScreen = ({ route }) => {
  const { name, image, id, price, status } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [Status, SetStatus] = useState(status);
  const longText =
    " Cephalexin is generally prescribed to treat bacterial infections.Cephalexin is generally prescribed to treat bacterial infections.Cephalexin is generally prescribed to treat bacterial infections. It is used to treat various infections, It is used to treat various infections, It is used to treat various infections, including respiratory tract infections...";

  const TruncatedText = ({ text, maxLength }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    return (
      <View style={{ marginBottom: expanded ? 0 : 10 }}>
        <Text numberOfLines={expanded ? undefined : 3} ellipsizeMode="tail">
          {text.length > maxLength && !expanded
            ? text.substring(0, maxLength) + "..."
            : text}
        </Text>
        {text.length > maxLength && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={{ color: "blue" }}>
              {expanded ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const handleConfirm = () => {
    confirmCommande(id, comment);
    setModalVisible(false);
    SetStatus(1);
  };

  const handleRefuse = () => {
    // Add logic to handle refusal
    setModalVisible(false);
    SetStatus(4);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mt-5 ml-3 rounded-t-3xl">
          <Image
            className="mx-auto mt-3 w-[210px] h-[250px] rounded-xl"
            source={require("../../assets/test.png")}
          />
          <Text className="ml-1 text-2xl mt-14">Cephlexin</Text>
          <Text className="text-lg">Capsules USP</Text>
          <TruncatedText text={longText} maxLength={150} />
          <View>
            <View className="flex flex-row justify-between">
              <Text className="text-xl font-light">Availability</Text>
              <Text className="text-xl mr-3">{price} TND</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 9,
                marginTop: "3%",
                justifyContent: "center",
              }}
            >
              {/* TouchableOpacity 1 */}
              <TouchableOpacity
                style={{
                  width: 105,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: "#7289F1",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Ensure gradient doesn't overflow
                }}
                onPress={() => setSelectedItem("Chahed")}
              >
                {selectedItem === "Chahed" && (
                  <LinearGradient
                    colors={["#7289F1", "#9EB3FF"]}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                )}
                <Text
                  style={{
                    fontSize: 18,
                    color: selectedItem === "Chahed" ? "#000" : "#7289F1",
                  }}
                >
                  Chahed
                </Text>
              </TouchableOpacity>

              {/* TouchableOpacity 2 */}
              <TouchableOpacity
                style={{
                  width: 105,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: "#7289F1",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Ensure gradient doesn't overflow
                }}
                onPress={() => setSelectedItem("Ghzel")}
              >
                {selectedItem === "Ghzel" && (
                  <LinearGradient
                    colors={["#7289F1", "#9EB3FF"]}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                )}
                <Text
                  style={{
                    fontSize: 18,
                    color: selectedItem === "Ghzel" ? "#000" : "#7289F1",
                  }}
                >
                  Ghzel
                </Text>
              </TouchableOpacity>

              {/* TouchableOpacity 3 */}
              <TouchableOpacity
                style={{
                  width: 105,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: "#7289F1",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Ensure gradient doesn't overflow
                }}
                onPress={() => setSelectedItem("Nassine")}
              >
                {selectedItem === "Nassine" && (
                  <LinearGradient
                    colors={["#7289F1", "#9EB3FF"]}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                )}
                <Text
                  style={{
                    fontSize: 18,
                    color: selectedItem === "Nassine" ? "#000" : "#7289F1",
                  }}
                >
                  Nassine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "28%",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              width: "90%",
              height: "97%",
              padding: 50,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text style={{ marginBottom: 15, textAlign: "center" }}>
              Comment
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                width: "100%",
                marginBottom: 15,
                paddingLeft: 10,
              }}
              placeholder="Enter your comment"
              onChangeText={setComment}
              value={comment}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#2196F3",
                borderRadius: 20,
                padding: 10,
                elevation: 2,
              }}
              onPress={handleConfirm}
            >
              <Text style={{ color: "white" }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {Status === 5 && !modalVisible && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "#fff", // Ensure the background color to avoid content being hidden
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              height: 50,
              backgroundColor: "green",
              width: "45%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRefuse}
            style={{
              height: 50,
              backgroundColor: "red",
              width: "45%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>Refuse</Text>
          </TouchableOpacity>
        </View>
      )}

      {Status === 1 && <StatusMessage message="En attend" color="red" />}
      {Status === 4 && <StatusMessage message="Refused" color="red" />}
      {Status === 2 && <StatusMessage message="Collecté" color="red" />}
      {Status === 3 && <StatusMessage message="livre" color="red" />}
    </View>
  );
};

export default DetailsScreen;
