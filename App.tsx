import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticleScreen from "./screens/ArticleScreen";
import HeadlineScreen from "./screens/HeadlineScreen";
import {Button} from "react-native";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Headlines">
                <Stack.Screen name="Headlines" component={HeadlineScreen} options={{headerStyle: {backgroundColor: "#e3e3e3"}}}/>
                <Stack.Screen name="Article" component={ArticleScreen} options={({navigation, route}) => ({
                    headerStyle: {backgroundColor: "#e3e3e3"},
                    title: route.params.item.headline,
                    headerRight: () => (<Button title="Trade" color="#123456"/>)})}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
