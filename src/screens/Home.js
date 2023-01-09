import React from 'react';
import {View} from "react-native";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header";
import AddProduct from "./components/ProductList/AddProduct";
import FindProduct from "./components/ProductList/FindProduct";

const Home = () => {
    return (
        <View style={styles.container}>
            <Header title="STOCK TRACKING SYSTEM" isBack={false}/>
            <View style={styles.row}>
                <AddProduct/>
                <FindProduct/>
            </View>
            <ProductList/>
        </View>
    );
};

const styles = {
    container: {
        width: "80%",
        alignSelf: "center",
    },
    row: {
        flexDirection: "row",
        marginVertical: 20
    }
}

export default Home;
