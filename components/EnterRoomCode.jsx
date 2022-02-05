import { 
    StyleSheet,
    View,
    TextInput,
    Text,
} from "react-native";

import { Button } from "./elements";
import config from "../config";

export default function EnterRoomCode() {
    const colors = config.colors;
    const handleSubmit = () => {
        console.log("submit form")
    };
    console.log(typeof colors.blue)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Enter room code:
            </Text>
            <TextInput
                placeholder="A1B2C3"
                style={styles.textInputStyle}
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