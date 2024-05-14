import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollY,
} from "react-native";
import CardSomething from "../components/CardSomething";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { data } from "../services/ServiceData";
import { fetchMedications } from "../redux/actions/actiondata";
import { Ionicons } from "@expo/vector-icons";
import Carddelivery from "../components/CardCommande";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeDemandsCard from "../components/HomeDemandsCard";

export default function HomePage({ navigation }) {
  const currentDate = new Date();

  // Format date as desired (e.g., "February 28, 2024")
  const formattedDate = currentDate.toLocaleDateString("en-EUROPE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const dispatch = useDispatch();
  const medications = useSelector((state) => state.medications);

  const [filteredMedications, setFilteredMedications] = useState(null);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userJson = await AsyncStorage.getItem("userData");
        const user = JSON.parse(userJson);
        console.log("", user);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    console.log(fetchUserData());
  }, []);
  return (
    <>
      <View className="h-[15%] ">
        <View className="h-[80%]    bg-white  text-red-400">
          <Text className="text-2xl text-center mt-4 ">
            Hi, {userData && userData.Email} !
          </Text>
          <Text className="text-base text-center ">{formattedDate} </Text>
        </View>
        <View>
          <View className="w-[100%] ">
            <View>
              <HomeDemandsCard
                route={() => {
                  navigation.navigate("DeliveryPage");
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex w-[full]  h-[23%] mt-[40%] flex-row rounded-xl">
        <CardSomething
          img={require("../../assets/taches 1.png")}
          deliveredOrPending={"medcaments"}
          number={27}
          color={"green-700"}
          onpress={() => {}}
        />
        <CardSomething
          img={require("../../assets/bulle 1.png")}
          deliveredOrPending={"messagerie"}
          number={27}
          color={"red-400"}
          route={() => {
            navigation.navigate("Messagerie");
          }}
        />
      </View>

      <View className="flex w-[full] h-[23%] left-[11%] mt-[5%] flex-row ">
        <CardSomething
          img={require("../../assets/garcon 1.png")}
          deliveredOrPending={"setting"}
          number={27}
          color={"red-500"}
          onpress={() => {}}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Set background color to transparent to see the gradient
  },
});
