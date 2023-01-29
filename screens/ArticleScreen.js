import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {Button} from "react-native";

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
                <Button onPress={() => navigation.navigate("Select Instruments", {article: route.params.article})}
                        title="Trade" color="#123456"/>
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
