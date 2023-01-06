import React from 'react';
import {Text, View} from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>STOCK TRACKING SYSTEM</Text>

        </View>
    );
};
const styles = {
    container:{
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5d76cb",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginBottom: 40
    },
    title: {
        textAlign: "center",
        fontSize:30,
        color: "#fff",
        fontWeight: "bold"
    }
}
export default Header;
