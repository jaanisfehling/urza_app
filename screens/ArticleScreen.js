import React from 'react';
import {WebView} from 'react-native-webview';

export default function ArticleScreen({route, navigation}) {
    const injectedJavaScript = `
        var elements = document.querySelectorAll("p,ul,ol");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "50px";
        }`;
    return (
        // <View style={{padding: 20}}>
        <WebView
            originWhitelist={['*']}
            source={{html: route.params.html}}
            injectedJavaScript={injectedJavaScript}
        />
        // </View>
    );
}