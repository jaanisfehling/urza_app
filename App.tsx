import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticleScreen from "./screens/ArticleScreen";
import HeadlineScreen from "./screens/HeadlineScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Headlines">
                <Stack.Screen name="Headlines" component={HeadlineScreen}/>
                <Stack.Screen name="Article" component={ArticleScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
