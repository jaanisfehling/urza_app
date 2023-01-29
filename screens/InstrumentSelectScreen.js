import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import SelectDropdown from "react-native-select-dropdown"
import axios from "axios";
import {CandlestickChart} from "react-native-wagmi-charts";
import DuoToggleSwitch from "react-native-duo-toggle-switch";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    dropdownBtnStyle: {
        height: 50,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444444",
    },
    dropdownBtnTextStyle: {color: '#444', textAlign: "left"},
    dropdownDropdownStyle: {backgroundColor: "#EFEFEF", borderRadius: 8},
    dropdownRowStyle: {backgroundColor: "#EFEFEF", borderBottomColor: "#C5C5C5"},
    dropdownRowTextStyle: {color: '#444', textAlign: "left"},
});


export default function InstrumentSelectScreen({route, navigation}) {

    const [selectedTicker, setSelectedTicker] = useState(route.params.article.tickers[0]);
    const [stockData, setStockData] = useState({});
    const [optionType, setOptionType] = useState("Call");

    useEffect(() => {
        const fetchStockData = async () => {
            const response = await axios.get("/api/stock", {params: {symbol: selectedTicker}}).catch(err => {
                console.error(err);
            });
            setStockData(response.data.ohlc);
        }
        fetchStockData();
    }, []);

    return (
        <View style={styles.container}>
            <SelectDropdown
                data={route.params.article.tickers}
                defaultButtonText={route.params.article.tickers[0]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    setSelectedTicker(selectedItem);
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                buttonStyle={styles.dropdownBtnStyle}
                buttonTextStyle={styles.dropdownBtnTextStyle}
                dropdownStyle={styles.dropdownDropdownStyle}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowTextStyle}
            />
            <CandlestickChart.Provider data={stockData.ohlc}>
                <CandlestickChart>
                    <CandlestickChart.Candles/>
                </CandlestickChart>
            </CandlestickChart.Provider>

            <DuoToggleSwitch
                primaryText="Call"
                secondaryText="Put"
                onPrimaryPress={() => {
                    setOptionType("Call")
                }}
                onSecondaryPress={() => {
                    setOptionType("Put")
                }}
            />
            <FlatList
                data={(optionType === "Call") ? stockData.instruments.call : stockData.instruments.put}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text style={{flexDirection: "row"}}>{item.name}</Text>
                            <Text style={{flexDirection: "row"}}>{item.delta}</Text>
                            <Text style={{flexDirection: "row"}}>{item.expiry}</Text>
                        </View>)
                }}/>
        </View>
    );
}

