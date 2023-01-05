import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export default function App() {

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrwO5k065Ka1N4e20YDGxdSIlmcQAyFBY",
    authDomain: "idvlabs-stock-tracking-app.firebaseapp.com",
    projectId: "idvlabs-stock-tracking-app",
    storageBucket: "idvlabs-stock-tracking-app.appspot.com",
    messagingSenderId: "421003806366",
    appId: "1:421003806366:web:f108816a2250bf361bdd8f"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <View style={styles.container}>
      <Text>Stock Tracking App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
