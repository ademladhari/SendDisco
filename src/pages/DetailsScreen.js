import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { confirmCommande } from "../services/ServiceData";
const DetailsScreen = ({ route }) => {
  const { name, image, id, price } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(price);
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
  return (
    <>
      <View
        className="  mt-5 h-[70%] ml-3  rounded-t-3xl   "
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View className="">
          <Image
            className="mx-auto mt-3 w-[210px] h-[250px] rounded-xl"
            source={require("../../assets/test.png")}
          />
          <Text className="ml-1 text-2xl mt-14">Cephlexin</Text>
          <Text className=" text-lg ">Capsules USP</Text>
          <TruncatedText text={longText} maxLength={150} />
          <View>
            <View className=" flex  flex-row justify-between">
              <Text className="text-xl font-light ">Availability</Text>
              <Text className="text-xl mr-3 ">{price} TND</Text>
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
      </View>
      {console.log(id)}
      <TouchableOpacity
        onPress={() => confirmCommande(id)}
        className="absolute bottom-2 inset-x-0 h-10 bg-blue-500 w-[90%] ml-4  rounded-lg  justify-center items-center"
      >
        <Text className="text-center text-white text-2xl">Confirm</Text>
      </TouchableOpacity>
    </>
  );
};

export default DetailsScreen;
