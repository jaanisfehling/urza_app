import React from 'react';
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
                <Stack.Screen name="Headlines" component={HeadlineScreen}/>
                <Stack.Screen name="Article" component={ArticleScreen} options={({navigation, route}) => ({
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate("Trading", route.params.tickers)}
                            title="Trade"
                            color="#123456"
                        />)
                })}/>
                <Stack.Screen name="Trading" component={TradingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
