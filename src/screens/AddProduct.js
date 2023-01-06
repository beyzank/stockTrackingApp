import React, {useState} from 'react';
import {TouchableOpacity, View} from "react-native";
import AddProductModal from "./modals/AddProductModal";

const AddProduct = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openAddProductModal = () => {
        setModalVisible(true)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openAddProductModal}>Add New Product</TouchableOpacity>
            <AddProductModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    );
};
const styles = {
    container:{
      alignItems: "flex-end"
    },
    button:{
        width: 180,
        height: 40,
        textAlign: "center",
        justifyContent: "center",
        borderRadius:6,
        backgroundColor: "#5d76cb",
        color: "#fff",
        marginVertical: 20,
        fontSize: 16,
        fontWeight: "bold"
    }
}
export default AddProduct;
