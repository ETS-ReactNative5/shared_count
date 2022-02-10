import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from "react-native" 

import config from "../config"

export default function CountButton ({increaseCount}) {
    return (
        <View style={styles.container} >
            <TouchableOpacity 
                style={styles.button}
                onPress={increaseCount}
            >
                <Text style={styles.text}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const colors = config.colors
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: 150,
        backgroundColor: colors.blue,
        color: colors.dark,
        borderRadius: 200,
        shadowColor: "black",
        elevation: 10
    },
    text: {
        fontSize: 60
    }
})