import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthentication } from "../redux/actions/actionAuth";
import HomePage from "../pages/HomePage";
import Auth from "../pages/Auth";
import StartPage from "../pages/Startpage";
import ChatScreen from "../pages/messagerisPages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

import * as firebase from "firebase/app";
import DeliveryPage from "../pages/deliveries-page";
import DetailsScreen from "../pages/DetailsScreen";

const firebaseConfig = {
  apiKey: "AIzaSyCPePoIfbYu2cfOqWiY4wm0D9_XVdwDgQw",
  authDomain: "notificationapp-bfdcf.firebaseapp.com",
  projectId: "notificationapp-bfdcf",
  storageBucket: "notificationapp-bfdcf.appspot.com",
  messagingSenderId: "709034714107",
  appId: "1:709034714107:web:0a4beaff5756a62764e15e",
  measurementId: "G-LVN95021N2",
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication());

    // Check for permissions and register device token
    registerForPushNotificationsAsync();

    // Handle notifications when app is in foreground
    const foregroundSubscription =
      Notifications.addNotificationReceivedListener(handleNotification);

    // Handle notifications when app is in background or closed
    const backgroundSubscription =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationResponse
      );

    return () => {
      foregroundSubscription.remove();
      backgroundSubscription.remove();
    };
  }, []);

  // const registerForPushNotificationsAsync = async () => {
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     const token = (await Notifications.getExpoPushTokenAsync({
  //       projectId: "10cf236d-d4d8-4ea6-b868-f7c5b5741696",
  //     })).data;
  //     console.log("sssssss",token);
  //     // Save the token to your backend for sending push notifications.
  //     // You can also handle token refreshing here.

  //   }
  // };

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "10cf236d-d4d8-4ea6-b868-f7c5b5741696",
        })
      ).data;
      console.log(token);
      // Save the token to your backend for sending push notifications.
      // You can also handle token refreshing here.
      firebase
        .messaging()
        .getToken()
        .then((fcmToken) => {
          if (fcmToken) {
            console.log(fcmToken);
            // Send the token to your backend for sending FCM notifications
            // For example, you can store it in Firebase Realtime Database or Firestore
            firebase
              .database()
              .ref("users/" + userId + "/pushToken")
              .set(fcmToken);
          } else {
            console.log("No FCM token available");
          }
        })
        .catch((error) => {
          console.log("An error occurred while retrieving token. ", error);
        });
    } else {
      alert("Must use physical device for push notifications");
    }
  };
  const handleNotification = (notification) => {
    // Handle notification when the app is in the foreground
    console.log(notification);
  };

  const handleNotificationResponse = (response) => {
    // Handle notification when the app is in the background or closed
    console.log(response);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Startup"
              component={StartPage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={Auth}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomePage}
            />
            <Stack.Screen name="Messagerie" component={ChatScreen} />
            <Stack.Screen name="DeliveryPage" component={DeliveryPage} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
