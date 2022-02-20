import {
    View, 
    Text,
    StyleSheet,
} from "react-native"

export default function NotConnected () {
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>
                It seems like you're not connected to the internet...
            </Text>
            <Text style={styles.message}>
                Try checking your Wi-fi or mobile network connection!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    message: {
        fontSize: 15,
        paddingVertical: 20
    },
    container: {
        padding: 30
    }
})