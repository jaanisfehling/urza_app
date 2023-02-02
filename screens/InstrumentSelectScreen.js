import React, {useEffect, useState} from "react";
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import SelectDropdown from "react-native-select-dropdown"
import DuoToggleSwitch from "react-native-duo-toggle-switch";
import {axiosInstance} from "../axiosInstance";
import {Chart} from "../components/Chart";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    innerContainer: {
        margin: 10,
        alignItems: "center"
    },

    dropdownBtn: {
        height: 50,
        backgroundColor: "#333333",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444444",
    },
    dropdownBtnText: {color: "#ffffff", textAlign: "left"},
    dropdownDropdown: {backgroundColor: "#333333", borderRadius: 8},
    dropdownRow: {backgroundColor: "#333333", borderBottomColor: "#444444"},
    dropdownRowText: {color: "#ffffff", textAlign: "left"},

    optionsRow: {flexDirection: "row", justifyContent: "space-between"},
    optionName: {fontSize: 14, color: "#999999", fontFamily: "OpenSans"},
    optionRowText: {color: "#ffffff", fontSize: 18, fontFamily: "OpenSans"}
});


export default function InstrumentSelectScreen({route, navigation}) {
    const [selectedStock, setSelectedStock] = useState(route.params.article.tickers[0]);
    const [stockData, setStockData] = useState({});
    const [optionType, setOptionType] = useState("call");

    useEffect(() => {
        const fetchStockData = async () => {
            const response = await axiosInstance.get("/api/stocks", {params: {symbols: route.params.article.tickers.toString()}}).catch(err => {
                console.error(err);
            });
            setStockData(response.data);
        }
        fetchStockData();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <SelectDropdown
                    data={route.params.article.tickers}
                    defaultButtonText={route.params.article.tickers[0]}
                    onSelect={(selectedItem, index) => {
                        setSelectedStock(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.dropdownBtn}
                    buttonTextStyle={styles.dropdownBtnText}
                    dropdownStyle={styles.dropdownDropdown}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.dropdownRowText}
                />
                <Chart
                    type="line"
                    data={(Object.keys(stockData).length !== 0) ? stockData[selectedStock]["ohlc"] : undefined}/>
                <DuoToggleSwitch
                    primaryText="Call"
                    secondaryText="Put"
                    activeTextColor="#ffffff"
                    inactiveTextColor="#777777"
                    activeColor="#333333"
                    inactiveColor="#444444"
                    onPrimaryPress={() => {
                        setOptionType("call");
                    }}
                    onSecondaryPress={() => {
                        setOptionType("put");
                    }}
                />
            </View>
            <FlatList
                style={{flex: 2, margin: 10}}
                data={(Object.keys(stockData).length !== 0) ? stockData[selectedStock]["options"][optionType] : {}}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => navigation.navigate("Trade Instrument", {instrument: item.name})}>
                            <Text style={styles.optionName}>{item.name}</Text>
                            <View style={styles.optionsRow}>
                                <Text style={styles.optionRowText}>{item.strike} $</Text>
                                <Text style={styles.optionRowText}>{item.delta}</Text>
                                <Text style={styles.optionRowText}>{item.expiry}</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'white',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                }}
                            />
                        </Pressable>)
                }}/>
        </View>
    );
}
