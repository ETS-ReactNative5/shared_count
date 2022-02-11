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


const verifyRoomId = (roomId) => !(
    roomId === "" ||
    roomId.length !== 6 ||
    roomId.match(/^[0-9a-z]+$/) 
)

export default function EnterRoomCode({getName, setRoomId}) {
    const colors = config.colors;
    const [Id, setId] = useState("");

    const handleSubmit = () => {
        if(!verifyRoomId(Id)){
            Alert.alert(
                "Room name invalid.",
                "Please enter a valid room name."
            )
            return 
        }
        setRoomId(Id);
        getName();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Enter room code:
            </Text>
            <TextInput
                placeholder="A1B2C3"
                style={styles.textInputStyle}
                onChangeText={setId}
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