import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {fontLightItalic, fontRegular} from "../utils";


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
    inputLabel: {
        fontFamily: fontRegular,
        color: "#ffffff",
        fontSize: 10,
        marginLeft: 15
    },
});

export default function RegisterScreen({navigation}) {
    const [email, onChangeEmail] = React.useState("");
    const [emailConfirm, onChangeEmailConfirm] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [passwordConfirm, onChangePasswordConfirm] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input}
                       onChangeText={onChangeEmail}
                       value={email}
                       placeholder="Email"
                       autoComplete="email"
                       inputMode="email"/>
            <Text style={styles.inputLabel}>Confirm Email</Text>
            <TextInput style={styles.input}
                       onChangeText={onChangeEmailConfirm}
                       value={emailConfirm}
                       placeholder="Confirm Email"
                       autoComplete="email"
                       inputMode="email"/>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input}
                       onChangeText={onChangePassword}
                       value={password}
                       placeholder="Password"
                       secureTextEntry={true}/>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput style={styles.input}
                       onChangeText={onChangePasswordConfirm}
                       value={passwordConfirm}
                       placeholder="Confirm Password"
                       secureTextEntry={true}/>

            <TouchableOpacity style={styles.button} onPress={() => {
            }}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
