import React, {useState} from 'react';
import {TextInput, View} from "react-native";
import {filterProducts} from "../../../store/client/product";

const FindProduct = () => {
    const [productName, setProductName] = useState("");

    const filter = async (item) => {
        setProductName(item)
        let array = []
        await filterProducts(item).then(res => {
            res.forEach((doc) => {
                array.push({data: doc.data(), id: doc.id})
            });
        })
        console.log(array);
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
export default FindProduct;
