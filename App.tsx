import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticleScreen from "./screens/ArticleScreen";
import HeadlineScreen from "./screens/HeadlineScreen";
import {Button} from "react-native";
import InstrumentSelectScreen from "./screens/InstrumentSelectScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Headlines" screenOptions={{
                headerStyle: {backgroundColor: "#2c6093",},
                headerTintColor: "#ffffff",
                headerTitleStyle: {fontWeight: "bold",},
                contentStyle:{backgroundColor:"#ffffff"}
            }}>
                <Stack.Screen name="Headlines" component={HeadlineScreen}/>
                <Stack.Screen name="Article" component={ArticleScreen} options={({navigation, route}) => ({
                    title: route.params.article.headline,
                    headerRight: () => (<Button title="Trade" color="#123456"/>)})}/>
                <Stack.Screen name="Select_Instruments" component={InstrumentSelectScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
