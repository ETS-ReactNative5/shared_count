import { 
    StyleSheet,
    View,
    TextInput,
    Text,
    Button
} from "react-native";

export default function EnterRoomCode() {
    const handleSubmit = () => {
        console.log("submit form")
    }
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
                title="Ok"
                onPress={handleSubmit}
                color="blue"
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