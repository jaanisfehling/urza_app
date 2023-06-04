import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {axiosInstance, fontRegular} from "../consts";
import {CandleChart} from "../components/Chart";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    innerContainer: {
        margin: 10,
        alignItems: "center"
    },
    header: {
        color: "#ffffff",
        fontSize: 26,
        fontFamily: fontRegular
    }
});


export default function TradingScreen({route, navigation}) {
    const [instrumentData, setInstrumentData] = useState({});

    useEffect(() => {
        const fetchInstrumentData = async () => {
            const response = await axiosInstance.get("/api/instrument", {params: {name: route.params.instrument}}).catch(err => {
                console.error(err);
            });
            setInstrumentData(response.data);
        }
        fetchInstrumentData();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.header}>{route.params.instrument.name}</Text>
                <CandleChart data={(Object.keys(instrumentData).length !== 0) ? instrumentData["ohlc"] : undefined}/>
            </View>
        </View>
    );
}
