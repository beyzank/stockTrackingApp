import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {createNewProduct} from "../../store/actions/client/product";
import actions from "../../store/actions";
import {connect} from "react-redux";

const AddProductModal = (props) => {
    const [serialNo, setSerialNo] = useState();
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState();
    const [purchasePrice, setPurchasePrice] = useState();
    const [salePrice, setSalePrice] = useState();

    const clearInputs = () => {
        setSerialNo(null)
        setProductName("")
        setQuantity(null)
        setPurchasePrice(null)
        setSalePrice(null)
    }

    const closeModal = () => {
        clearInputs()
        props.setModalVisible(false)
    }

    const writeProductData = () => {
        if(serialNo === "" || productName === "" || quantity === "" || purchasePrice === "" || salePrice === ""){
            alert("Please fill in all fields!");
            return;
        }
        if (serialNo <= 0 || quantity <= 0 || purchasePrice <= 0 || salePrice <= 0){
            alert("The entered value cannot be less than zero!")
            return;
        }
        createNewProduct({
            serialNo: serialNo,
            productName: productName,
            quantity: quantity,
            purchasePrice: purchasePrice,
            salePrice: salePrice,
        }).then(() => {
            props.getProducts()
            clearInputs()
        });
        props.setModalVisible(false)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.setModalVisible(!props.modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Serial Number(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setSerialNo}
                            value={serialNo}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <Text style={styles.title}>Product Name(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setProductName}
                            value={productName}
                            placeholder=""
                        />
                        <Text style={styles.title}>Stock Quantity(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setQuantity}
                            value={quantity}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <Text style={styles.title}>Purchase Price(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPurchasePrice}
                            value={purchasePrice}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <Text style={styles.title}>Sale Price(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setSalePrice}
                            value={salePrice}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.saveButton} onPress={writeProductData}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={closeModal}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "50%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        width: "50%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    title:{
        fontSize: 18,
        marginBottom: 10
    },
    input:{
        height: 35,
        borderRadius: 6,
        border: "1px solid #aeaeae",
        marginBottom: 25
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    saveButton:{
        height: 40,
        width: "45%",
        backgroundColor: "#5d76cb",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    buttonText:{
        color: "#fff",
    }
});
const MapDispatchToProps = (dispatch) => {
    return{
        getProducts: () => dispatch(actions.products.listProducts()),
    }
}
export default connect(null, MapDispatchToProps)(AddProductModal);
