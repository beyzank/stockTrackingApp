import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {getDatabase, ref, set} from "firebase/database";

const AddProductModal = (props) => {
    const [serialNo, setSerialNo] = useState();
    const [productName, setProductName] = useState("");
    const [count, setCount] = useState();

    const writeProductData = () => {
        const db = getDatabase();
        set(ref(db, 'products/' + serialNo), {
            serialNo: serialNo,
            productName: productName,
            count: count
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
                        <Text style={styles.title}>Seri No(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setSerialNo}
                            value={serialNo}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <Text style={styles.title}>Ürün Adı(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setProductName}
                            value={productName}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <Text style={styles.title}>Stok Adedi(*)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setCount}
                            value={count}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.saveButton} onPress={writeProductData}>Kaydet</TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "70%",
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
        width: "70%",
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
    saveButton:{
        height: 40,
        width: "100%",
        backgroundColor: "#5d76cb",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    }
});
export default AddProductModal;
