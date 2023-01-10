import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {removeProduct} from "../../store/actions/client/product";
import actions from "../../store/actions";
import {connect} from "react-redux";

const DeleteModal = (props) => {
    const deleteItem = () => {
        removeProduct(props.id).then(()=> props.getProducts())
        props.setModalVisible(false)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(!props.modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Are you sure want to delete this product?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.saveButton} onPress={deleteItem}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={() => props.setModalVisible(false)}>
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

    title:{
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center"
    },
    input:{
        height: 35,
        borderRadius: 6,
        border: "1px solid #aeaeae",
        marginBottom: 25
    },
    saveButton:{
        height: 40,
        width: "40%",
        backgroundColor: "#5d76cb",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50
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
export default connect(null, MapDispatchToProps)(DeleteModal)
