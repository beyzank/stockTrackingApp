import React, {useState} from 'react';
import {TextInput, View} from "react-native";
import actions from "../../../store/actions";
import {connect} from "react-redux";

const FindProduct = (props) => {
    const [productName, setProductName] = useState("");

    const filter = async (item) => {
        setProductName(item)
        props.filterProducts(item)

    }
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={filter}
                value={productName}
                placeholder="Search Product"
                placeholderTextColor={"#aeaeae"}
            />
        </View>
    );
};

const styles = {
    input:{
        height: 35,
        borderRadius: 6,
        width: 180,
        border: "1px solid #aeaeae",
        marginBottom: 25,
        padding: 10
    },
}
const MapDispatchToProps = (dispatch) => {
    return{
        filterProducts: (text) => dispatch(actions.products.getFilteredProducts(text)),
    }
}
export default connect(null,MapDispatchToProps)(FindProduct);
