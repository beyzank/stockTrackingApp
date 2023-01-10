import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DeleteModal from "../../modals/DeleteModal";
import {updateProduct} from "../../../store/actions/client/product";
import {useNavigation} from "@react-navigation/native";
import {connect} from "react-redux";
import actions from "../../../store/actions"

const ProductList = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const navigation = useNavigation();
    const showFilteredProducts = props.filteredProducts && props.filteredProducts.length > 0;
    useEffect(() => {
        props.getProducts()
    }, []);

    const decrease = (item) => {

        const postData = {
            serialNo: item.data.serialNo,
            productName: item.data.productName,
            quantity: item.data.quantity - 1,
            purchasePrice: item.data.purchasePrice,
            salePrice: item.data.salePrice,
        };
        updateProduct(postData, item.id).then(() => props.getProducts())
    }

    const increase = (item) => {

        const postData = {
            serialNo: item.data.serialNo,
            productName: item.data.productName,
            quantity: item.data.quantity + 1,
            purchasePrice: item.data.purchasePrice,
            salePrice: item.data.salePrice,
        };
        updateProduct(postData, item.id).then(() => props.getProducts())
    }

    const deleteItem = (item) => {
        setSelectedItem(item.id)
        setModalVisible(true)
    }
    const editItem = (item) => {
        navigation.navigate("UseProduct", {product: item});
    }

    const productItem = ({item}) => {
        return <View style={styles.itemRow}>
            <Text style={styles.cell}>{item.data.serialNo}</Text>
            <Text style={styles.cell}>{item.data.productName}</Text>
            <View style={styles.countContainer}>
                <TouchableOpacity style={styles.buttons} onPress={() => decrease(item)}>
                    <Text style={styles.title}> - </Text>
                </TouchableOpacity>
                <Text>{item.data.quantity}</Text>
                <TouchableOpacity style={styles.buttons} onPress={() => increase(item)}>
                    <Text style={styles.title}> + </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.cell}>{item.data.purchasePrice}</Text>
            <Text style={styles.cell}>{item.data.salePrice}</Text>
            <TouchableOpacity onPress={() => editItem(item)} style={styles.iconContainer}>
                <Icon name="edit" size={30} color="#aeaeae"/>
                <Text style={styles.iconText}>Use</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem(item)} style={styles.iconContainer}>
                <Icon name="delete" size={30} color="#900"/>
                <Text style={styles.iconText}>Delete</Text>
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
                    <View style={styles.iconContainer}/>
                </View>
                {showFilteredProducts ? <FlatList data={props.filteredProducts} renderItem={productItem}/> :
                <FlatList data={props.products} renderItem={productItem}/>}
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
        fontSize: 17,
        textAlign: "center"
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
        width: "10%",
    },
    iconContainer: {
        width: "5%",
        alignItems: "center",

    },
    iconText: {
        color: "#5d76cb",
        marginTop: 5,
        textAlign: "center"
    }
}
const MapStateToProps = (state) => {
    return {
        products: state.products.products,
        filteredProducts: state.products.filteredProducts,
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(actions.products.listProducts()),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ProductList);
