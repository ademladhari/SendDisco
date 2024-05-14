import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileSetting from "../components/Profile-Setting";
import AdressCard from "../components/adress-card";
import Buttom from "../components/Buttom";
import { logoutUser } from "../redux/actions/actionAuth";

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userJson = await AsyncStorage.getItem("userData");
        const user = JSON.parse(userJson);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const dispatch = useDispatch();
  function logout() {
    dispatch(logoutUser());
    console.log("here");
  }


  return (
    <View>
      <View>
        <Text>Welcome, {userData && userData.Email}</Text>
      </View>

      <View>
        {userData && (
          <ProfileSetting
            name={userData.Name}
            Phonenumber={userData.phoneNumber}
            password={userData.password}
            adress={userData.address}
            region={userData.region}
          />
        )}
      </View>

      <View>
        {userData && (
          <AdressCard region={userData.region} address={userData.address} />
        )}
      </View>
      <View>
        <Button
          title="zae"
          onPress={() => {
            logout();
          }}
        >
          <Text>aze</Text>
        </Button>
      </View>
    </View>
  );
}
