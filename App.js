import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

export default function App() {
  const [serialNo, setSerialNo] = useState();
  const [productName, setProductName] = useState("");
  const [count, setCount] = useState();


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDrwO5k065Ka1N4e20YDGxdSIlmcQAyFBY",
    authDomain: "idvlabs-stock-tracking-app.firebaseapp.com",
    projectId: "idvlabs-stock-tracking-app",
    storageBucket: "idvlabs-stock-tracking-app.appspot.com",
    messagingSenderId: "421003806366",
    appId: "1:421003806366:web:f108816a2250bf361bdd8f",
    databaseURL: "https://idvlabs-stock-tracking-app-default-rtdb.europe-west1.firebasedatabase.app",
  };

// Initialize Firebase

  useEffect(() => {
    const app = initializeApp(firebaseConfig);

  },[]);

  const writeProductData = () => {
    const db = getDatabase();
    set(ref(db, 'products/' + serialNo), {
      serialNo: serialNo,
      productName: productName,
      count: count
    });
  }
  return (
    <View style={styles.container}>
      <Text>Stock Tracking App</Text>
      <Text>Seri No(*)</Text>
        <TextInput
            style={styles.input}
            onChangeText={setSerialNo}
            value={serialNo}
            placeholder=""
            keyboardType="numeric"
        />
        <Text>Ürün Adı(*)</Text>
        <TextInput
            style={styles.input}
            onChangeText={setProductName}
            value={productName}
            placeholder=""
            keyboardType="numeric"
        />
        <Text>Stok Adedi(*)</Text>
        <TextInput
            style={styles.input}
            onChangeText={setCount}
            value={count}
            placeholder=""
            keyboardType="numeric"
        />
      <TouchableOpacity onPress={writeProductData}>Kaydet</TouchableOpacity>
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
