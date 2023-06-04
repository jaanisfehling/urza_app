import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {fontLightItalic, fontRegular} from "../consts";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderColor: "#ffffff",
        borderRadius: 7,
        fontFamily: fontLightItalic
    },
    button: {
        alignItems: "center",
        backgroundColor: "#123456",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 70,
        marginVertical: 20
    },
    buttonText: {
        fontFamily: fontRegular,
        color: "#ffffff",
        fontSize: 16
    },
});

export default function ResetPwdScreen({navigation}) {
    const [email, onChangeEmail] = React.useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       onChangeText={onChangeEmail}
                       value={email}
                       placeholder="Email"
                       autoComplete="email"
                       inputMode="email"/>

            <TouchableOpacity style={styles.button} onPress={() => {
            }}>

                <Text style={styles.buttonText}>Send Link</Text>
            </TouchableOpacity>
        </View>
    );
}
