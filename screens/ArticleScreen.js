import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {Button, View} from "react-native";
import Modal from "react-native-modal";

export default function ArticleScreen({route, navigation}) {
    const injectedJavaScript = `
        var elements = document.querySelectorAll("p,ul,ol");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "50px";
        }`;


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={toggleModal} title="Trade" color="#123456"/>
            ),
        });
    }, [navigation, setModalVisible]);

    return (
        <View>
            <WebView
                originWhitelist={['*']}
                source={{html: route.params.item.html}}
                injectedJavaScript={injectedJavaScript}
                style={{opacity: 0.99, overflow: "hidden", flex: 2}}
            />
            <View style={{flex: 2}}>
                <Modal isVisible={isModalVisible}>
                    <View style={{flex: 3}}>
                        <Button title="Hide modal" onPress={toggleModal} color="#123456"/>
                    </View>
                </Modal>
            </View>
        </View>
    );
}