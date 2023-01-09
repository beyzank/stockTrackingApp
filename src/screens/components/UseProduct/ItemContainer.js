import React from 'react';
import {Text, View} from "react-native";

const ItemContainer = (props) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.desc}>{props.desc}</Text>
        </View>
    );
};

const styles = {
    itemContainer: {
        width: "20%",
        height: 120,
        borderRadius: 6,
        backgroundColor: "#dce2f7",
        marginRight: 20,
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
    desc:{
        fontSize: 23,
        fontWeight: "bold",
        lineHeight: 30,
        textAlign: "center",
        color: "#2D3538"
    },
}

export default ItemContainer;
