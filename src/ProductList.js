import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from "react-native";
import {child, get, getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config/firebase";

const ProductList = () => {

    const [products, setProducts] = useState(null);
    initializeApp(firebaseConfig);

    useEffect(() => {
        getProducts();
    },[]);


    const getProducts = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `products/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const array = [];
                const data = snapshot.val()
                Object.keys(data).map(item => {
                    array.push(data[item]);
                });
                setProducts(array)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const productItem = ({item}) => {
        return <View style={styles.itemRow}>
            <Text>{item.serialNo}</Text>
            <Text>{item.productName}</Text>
            <Text>{item.count}</Text>
        </View>
    }
    return (
        <View>
            <View>
                <View style={{...styles.itemRow, backgroundColor: "#5d76cb"}}>
                    <Text style={styles.title}>Serial No</Text>
                    <Text style={styles.title}>Product Name</Text>
                    <Text style={styles.title}>Count</Text>
                </View>
                {products && products !== null && <FlatList data={products} renderItem={productItem}/>}
            </View>
        </View>
    );
};
const styles = {
    itemRow: {
        flexDirection:"row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#dce2f7",
        height: 60,
        padding: 15,
        borderRadius:5
    },
    title:{
        color: "#fff",
        fontSize: 17
    }
}

export default ProductList;
