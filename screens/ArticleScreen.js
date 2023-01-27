import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Button, View} from "react-native";
import Modal from "react-native-modal";

export default function ArticleScreen({route, navigation}) {
    const injectedJavaScript = `
        var pageDivs = document.getElementsByClassName("page");
        for (var i = 0; i < pageDivs.length; i++) {
            pageDivs[i].style.margin = "20px";
        };
        var textElemns = document.querySelectorAll("p,ul,ol");
        for (var i = 0; i < textElemns.length; i++) {
            textElemns[i].style.fontSize = "50px";
        }`;


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.navigate("Select_Instruments", {article: route.params.article})} title="Trade" color="#123456"/>
            ),
        });
    }, [navigation]);

    return (
        <WebView
            originWhitelist={['*']}
            source={{html: route.params.article.html}}
            injectedJavaScript={injectedJavaScript}
        />
    );
}
