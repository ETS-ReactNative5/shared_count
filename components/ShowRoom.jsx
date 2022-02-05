import {
    StyleSheet,
    View,
    Text
} from "react-native"

import config from "../config"

export default function ShowRoom ({roomCode}) {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                {roomCode}
            </Text>
        </View>

    )
}

const colors = config.colors;
const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    text: {
        fontSize: 25
    }
})