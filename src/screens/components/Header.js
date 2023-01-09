import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";

const Header = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                {props.isBack && <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios" size={30} color="#5d76cb"/>
                </TouchableOpacity>}
            </View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.title}> </Text>
        </View>
    );
};
const styles = {
    container:{
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    },
    backButton:{
        backgroundColor: "#dce2f7",
        borderBottomLeftRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60
    }
}
export default Header;
