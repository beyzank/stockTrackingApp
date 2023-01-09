import {createStackNavigator} from '@react-navigation/stack';
import UseProduct from "../screens/UseProduct";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../screens/Home";
const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="UseProduct" component={UseProduct}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNav;
