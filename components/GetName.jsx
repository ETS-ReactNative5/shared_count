import { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert
} from "react-native";


import config from "../config";

export default function GetName ({setName, closePrompt, enterRoom}) {

    const [userName, setUserName] = useState("");
    const submit = () => {
		if(userName === "") {
			Alert.alert(
				"Name not valid",
				"Please insert a valid name."
			);
			return
		}
        setName(userName);
        enterRoom();
    }

    return (
        <View style={styles.container}>
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
                    <Button 
                        onPress={closePrompt}
                        title="Cancel"
                        color={config.colors.orange}
                    />
                    <Button 
                        onPress={submit}
                        title="Ok"
                        color={config.colors.blue}
                    />

                </View>
            </View>
        </View>
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
        zIndex: 10,
        // backgroundColor: colors.gray,
        // opacity: 0.7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    window: {
        width: "80%",
        marginHorizontal: "auto",
        paddingHorizontal: 10,
        paddingVertical: 20,
        minHeight: 200,
        backgroundColor: "white",
        borderRadius: 20
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
        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-around",
    }
})