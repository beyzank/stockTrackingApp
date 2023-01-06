import React, {useEffect} from 'react';
import {View} from 'react-native';
import {initializeApp} from "firebase/app";
import ProductList from "./src/screens/ProductList";
import {firebaseConfig} from "./src/config/firebase";
import Header from "./src/screens/Header"
import AddProduct from "./src/screens/AddProduct";

export default function App() {

    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <AddProduct/>
            <ProductList/>
        </View>
    );
}

const styles = {
    container: {
        width: "80%",
        alignSelf: "center",
    }
}
