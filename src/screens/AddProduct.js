import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import AddProductModal from "./modals/AddProductModal";

const AddProduct = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openAddProductModal = () => {
        setModalVisible(true)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openAddProductModal}>
                <Text style={styles.buttonText}>Add New Product</Text>
            </TouchableOpacity>
            <AddProductModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    );
};
const styles = {
    container: {
        alignItems: "flex-end"
    },
    button: {
        width: 180,
        height: 40,
        textAlign: "center",
        justifyContent: "center",
        borderRadius: 6,
        marginVertical: 20,
        backgroundColor: "#5d76cb",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
}
export default AddProduct;
