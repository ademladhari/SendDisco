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
import Carddelivery from "../components/CardCommande";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { data } from "../services/ServiceData";
import { fetchMedications } from "../redux/actions/actiondata";

export default function DeliveryPage() {
  // Format date as desired (e.g., "February 28, 2024")

  const dispatch = useDispatch();
  const medications = useSelector((state) => state.medications);
  const navigation = useNavigation();
  const [filteredMedications, setFilteredMedications] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMedications()); // This line should dispatch the action
        // Make sure you are getting the data from the action

        console.log("Action dispatched successfully");
      } catch (error) {
        console.error("Error dispatching fetchMedications:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Filter medications based on the search query and selected category
    if (medications && medications["commandes"]) {
      let filteredMeds = medications["commandes"];
      console.log("heh", filteredMeds.commandes);
      setFilteredMedications(filteredMeds.commandes);
    } else {
      setFilteredMedications(null);
    }
  }, [medications]);
  return (
    <>
      <ScrollView className="h-[20%] ">
        {console.log(filteredMedications)}
        {filteredMedications !== null && filteredMedications?.length > 0 ? (
          filteredMedications.map((medication, index) => (
            <View className="h-[80px] my-3" key={index}>
              {console.log(medication.id)}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DetailsScreen", {
                    name: medication.name,
                    id: medication.id,
                    image: require("../../assets/phone-call.png"),
                    description: medication.description,
                    price: medication.total,
                    status: medication.statut_id,
                  })
                }
                style={styles.cardContainer}
              >
                <Carddelivery
                  key={index}
                  // img={require("../../assets/pendinggg.png")}
                  // deliveredOrPending={"Pending"}
                  // number={27}
                  // color="red-40s0"
                  matrecule={medication.matercule}
                  name={medication.commentaire}
                  time={medication.updated_at}
                  place={medication.adress}
                  color={"p"}
                />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading loding data...</Text>
        )}
      </ScrollView>
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
