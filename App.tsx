import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView} from "react-native";
import ArticleScreen from "./screens/ArticleScreen";
import HeadlineScreen from "./screens/HeadlineScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Headlines" component={HeadlineScreen}/>
                        <Stack.Screen name="Article" component={ArticleScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </SafeAreaView>
    );
}
