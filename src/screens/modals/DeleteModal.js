import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const DeleteModal = (props) => {
    const deleteItem = () => {
        alert("deleted")
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}
        > <View style={styles.centeredView}>

            <View style={styles.modalView}>
                <Text style={styles.text}>Are you sure want to delete this item?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={deleteItem}>Yes</TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton}
                                      onPress={() => props.setModalVisible(false)}>Cancel</TouchableOpacity>
                </View>
            </View>

        </View>
        </Modal>
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
        width: "40%",
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

    text: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center"
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
        marginTop: 50
    },
    saveButton: {
        height: 40,
        width: "40%",
        backgroundColor: "#5d76cb",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    }
});
export default DeleteModal;
