import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";

export default function CreateNewRoom () {
    const handleCreateNewRoom = () => {
        console.log("creating new room")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleCreateNewRoom}
            >
                <Text style={styles.buttonText}>Create new room</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 100,
        paddingHorizontal: 20,
        width: "100%"
    },
    button: {
        height: 50,
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    buttonText: {
        color: "white",
    },

})