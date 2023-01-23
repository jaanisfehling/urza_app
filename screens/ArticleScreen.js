import React from 'react';
import {WebView} from 'react-native-webview';

export default function ArticleScreen({route, navigation}) {
    const html = JSON.stringify(route.params.html);
    return (
        <WebView
            originWhitelist={['*']}
            source={{html: html}}
        />
    );
}