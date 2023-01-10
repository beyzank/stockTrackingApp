import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {updateProduct} from "../store/actions/client/product";
import {useNavigation} from "@react-navigation/native";
import Header from "./components/Header";
import ItemContainer from "./components/UseProduct/ItemContainer";
import actions from "../store/actions";
import {connect} from "react-redux";

const UseProduct = (props) => {

    const item=props.route.params.product;
    const [useProduct, setUseProduct] = useState();
    const navigation = useNavigation();

    const editProduct = () => {
        if(useProduct > item.data.quantity){
            alert("Error! Check the value you entered.")
            return;
        }
        else if(useProduct === item.data.quantity){
            alert("Do you want to delete this item?")
            return;
        }
        const newQuantity = item.data.quantity - useProduct;
        updateProduct({
            serialNo: item.data.serialNo,
            productName: item.data.productName,
            quantity: newQuantity,
            purchasePrice: item.data.purchasePrice,
            salePrice: item.data.salePrice,
        }, item.id).then(() => {
            props.getProducts()
            navigation.navigate("Home")
        });
    }

    return (
        <View style={styles.container}>
            <Header title="PRODUCT DETAIL" isBack={true}/>
            <View style={styles.productDetail}>
                <ItemContainer title="Serial Number" desc={item.data.serialNo}/>
                <ItemContainer title="Product Name" desc={item.data.productName}/>
                <ItemContainer title="Stock Quantity" desc={item.data.quantity}/>
            </View>
            <View style={styles.productDetail}>
                <ItemContainer title="Purchase Price" desc={item.data.purchasePrice}/>
                <ItemContainer title="Sale Price" desc={item.data.salePrice}/>
            </View>

            <Text style={styles.title}>How many products would you like to use?</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUseProduct}
                value={useProduct}
                placeholder=""
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.saveButton} onPress={editProduct}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "80%",
        alignSelf: "center",
    },
    productDetail:{
        flexDirection: "row",
        flex:1,
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        lineHeight: 30,
        marginVertical: 15,
        marginBottom: 10,
        textAlign: "center",
        color: "#5d76cb"
    },
    input: {
        height: 35,
        borderRadius: 6,
        border: "1px solid #aeaeae",
        marginBottom: 25,
        width: "30%",
        alignSelf: "center",
        padding:5
    },
    saveButton: {
        height: 40,
        width: "30%",
        alignSelf: "center",
        backgroundColor: "#5d76cb",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    buttonText: {
        color: "#fff",
    }
});

const MapDispatchToProps = (dispatch) => {
    return{
        getProducts: () => dispatch(actions.products.listProducts()),
    }
}
export default connect(null, MapDispatchToProps)(UseProduct);
