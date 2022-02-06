import { 
    StyleSheet,
    View,
    TextInput,
    Text,
    Alert,
} from "react-native";

import { useState } from "react";

import { Button } from "./elements";
import config from "../config";

export default function EnterRoomCode({enterRoom}) {
    const colors = config.colors;
    const [roomId, setRoomId] = useState("");

    const handleSubmit = () => {
        if(roomId === ""){Alert.alert(
            "Missing room name.",
            "Please enter a room name."
        )}
        enterRoom(roomId)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Enter room code:
            </Text>
            <TextInput
                placeholder="A1B2C3"
                style={styles.textInputStyle}
                onChangeText={setRoomId}
            />
            <Button 
                label="Ok"
                action={handleSubmit}
                backgroundColor={colors.blue}
                textColor={colors.dark}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 80,
        paddingHorizontal: 20,
        width: "100%"
    },
    text: {
        fontSize: 18
    },
    textInputStyle:{
        marginVertical: 15,
        height: 40,
        borderStyle: "solid",
        borderBottomWidth: 2
    },
    button :{
    }
})