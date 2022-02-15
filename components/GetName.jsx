import { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView
} from "react-native";


import config from "../config";

export default function GetName ({name, closePrompt, enter}) {

    const [userName, setUserName] = useState("");
    const submit = () => {
		if(userName === "") {
			Alert.alert(
				"Name not valid",
				"Please insert a valid name."
			);
			return
		}
        enter(userName);
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.window}>
                <Text style={styles.title}>
                    Enter a name:
                </Text>
                <Text style={styles.message}>
                    This name will appear to the other people in the room.
                </Text>
                <TextInput 
                    placeholder="Name"
                    onChangeText={setUserName}
                    style={styles.input}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}><Button 
                        onPress={closePrompt}
                        title="Cancel"
                        color={config.colors.orange}
                    /></View>
                    <View style={styles.button}><Button 
                        onPress={submit}
                        title="Ok"
                        color={config.colors.blue}
                    /></View>

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const colors = config.colors
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 20
    },
    window: {
        width: "80%",
        marginHorizontal: "auto",
        paddingHorizontal: 10,
        paddingVertical: 20,
        minHeight: 200,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "black",
        elevation: 30
    },
    title: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontSize: 30
    },
    message: {
        paddingHorizontal: 20,
    },
    input: {
        marginHorizontal: 20,
        marginVertical: 15,
        height: 40,
        borderStyle: "solid",
        borderBottomWidth: 2
    },
    buttons: {
        width: "100%",
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    button: {
        width: "50%",
        marginVertical: 15,

    }
})