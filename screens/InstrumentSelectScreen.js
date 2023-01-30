import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View, Text} from "react-native";
import SelectDropdown from "react-native-select-dropdown"
import DuoToggleSwitch from "react-native-duo-toggle-switch";
import {axiosInstance} from "../axiosInstance";
import { CandlestickChart } from 'react-native-wagmi-charts';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },

    dropdownBtn: {
        height: 50,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444444",
    },
    dropdownBtnText: {color: "#444", textAlign: "left"},
    dropdownDropdown: {backgroundColor: "#EFEFEF", borderRadius: 8},
    dropdownRow: {backgroundColor: "#EFEFEF", borderBottomColor: "#C5C5C5"},
    dropdownRowText: {color: "#444", textAlign: "left"},

    optionsList: {flexDirection: "row", justifyContent: "space-between"},
    optionRowText: {color: "#000000", fontSize: 18}
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
            <CandlestickChart.Provider data={(Object.keys(stockData).length !== 0) ? stockData[selectedStock]["ohlc"] : {}}>
                <CandlestickChart>
                    <CandlestickChart.Candles/>
                </CandlestickChart>
            </CandlestickChart.Provider>

            <DuoToggleSwitch
                primaryText="Call"
                secondaryText="Put"
                onPrimaryPress={() => {
                    setOptionType("call");
                }}
                onSecondaryPress={() => {
                    setOptionType("put");
                }}
            />
            <FlatList
                data={(Object.keys(stockData).length !== 0) ? stockData[selectedStock]["options"][optionType] : {}}
                renderItem={({item}) => {
                    return (
                        <View style={styles.optionsList}>
                            <Text style={styles.optionRowText}>{item.name}</Text>
                            <Text style={styles.optionRowText}>{item.delta}</Text>
                            <Text style={styles.optionRowText}>{item.expiry}</Text>
                        </View>)
                }}/>
        </View>
    );
}
