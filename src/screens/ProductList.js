import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {child, get} from "firebase/database";
import {dbRef} from "../config/firebase";
import Icon from "react-native-vector-icons/MaterialIcons";
import DeleteModal from "./modals/DeleteModal";
import {getProducts, updateProduct} from "../store/client/product";

const ProductList = () => {

    const [products, setProducts] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        getProductList();
    }, [products]);


    const getProductList = () => {

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

    const decrease = (item) => {

        const postData = {
            serialNo: item.serialNo,
            productName: item.productName,
            quantity: item.quantity - 1,
            purchasePrice: item.purchasePrice,
            salePrice: item.salePrice,
        };
        updateProduct(postData).then(() => getProducts())
    }

    const increase = (item) => {

        const postData = {
            serialNo: item.serialNo,
            productName: item.productName,
            quantity: item.quantity + 1,
            purchasePrice: item.purchasePrice,
            salePrice: item.salePrice,
        };
        updateProduct(postData).then(() => getProducts())
    }

    const deleteItem = (item) => {
        setSelectedItem(item.serialNo)
        setModalVisible(true)
    }

    const productItem = ({item}) => {
        return <View style={styles.itemRow}>
            <Text style={styles.cell}>{item.serialNo}</Text>
            <Text style={styles.cell}>{item.productName}</Text>
            <View style={styles.countContainer}>
                <TouchableOpacity style={styles.buttons} onPress={() => decrease(item)}>
                    <Text style={styles.title}> - </Text>
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => increase(item)}>
                    <Text style={styles.title}> + </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.cell}>{item.purchasePrice}</Text>
            <Text style={styles.cell}>{item.salePrice}</Text>
            <TouchableOpacity onPress={() => deleteItem(item)}>
                <Icon name="delete" size={30} color="#900"/>
            </TouchableOpacity>
        </View>
    }
    return (
        <View>
            <View>
                <View style={{...styles.itemRow, backgroundColor: "#5d76cb"}}>
                    <Text style={styles.title}>Serial No</Text>
                    <Text style={styles.title}>Product Name</Text>
                    <Text style={styles.title}>Quantity</Text>
                    <Text style={styles.title}>Purchase Price </Text>
                    <Text style={styles.title}>Sale Price</Text>
                </View>
                <FlatList data={products && products !== null ? products : null} renderItem={productItem}/>
            </View>
            <DeleteModal modalVisible={modalVisible} setModalVisible={setModalVisible} id={selectedItem}/>
        </View>
    );
};
const styles = {
    itemRow: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#dce2f7",
        height: 60,
        padding: 15,
        borderRadius: 5
    },
    title: {
        color: "#fff",
        fontSize: 17
    },
    countContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "20%",
    },
    buttons: {
        width: 30,
        height: 30,
        backgroundColor: "#5d76cb",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    cell: {
        textAlign: "center",
        width: "20%"
    }
}

export default ProductList;
