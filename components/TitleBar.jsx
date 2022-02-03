import { 
    StyleSheet,
    View,
    Text
} from "react-native";

export default function TitleBar() {
    return (
        <View style={styles.titleBar}>
            <View style={styles.icon}></View>
            <Text style={styles.titleText}>
                Shared Count
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleBar: {
        paddingVertical: 5,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    icon: {
        height: 50,
        width: 50,
        backgroundColor: "black"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    }
})