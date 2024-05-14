// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
const firebaseConfig = {
  apiKey: "AIzaSyBy48b5tpeQZUvC8WmK6h9AJ3n198iJZfE",
  authDomain: "verification-768d3.firebaseapp.com",
  databaseURL: "https://verification-768d3-default-rtdb.firebaseio.com",
  projectId: "verification-768d3",
  storageBucket: "verification-768d3.appspot.com",
  messagingSenderId: "690922762820",
  appId: "1:690922762820:web:d556359cc37d809bec8211",
  measurementId: "G-033R65KGYF"
};

// Initialize Firebase
return initializeApp(firebaseConfig);
}