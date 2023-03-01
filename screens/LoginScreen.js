import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
    loginButton: {
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
    helperText: {
        fontFamily: fontRegular,
        color: "#ffffff",
        fontSize: 12
    },
});

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       onChangeText={onChangeEmail}
                       value={email}
                       placeholder="Email"
                       autoComplete="email"
                       inputMode="email"/>
            <TextInput style={styles.input}
                       onChangeText={onChangePassword}
                       value={password}
                       placeholder="Password"
                       secureTextEntry={true}/>

            <TouchableOpacity style={styles.loginButton} onPress={() => {
            }}>

                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{alignItems: "center"}}>
                <Pressable style={{padding: 4}} onPress={() => {
                }}>
                    <Text style={styles.helperText}>Reset Password</Text>
                </Pressable>
                <Pressable style={{padding: 4}} onPress={() => {
                }}>
                    <Text style={styles.helperText}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
}
