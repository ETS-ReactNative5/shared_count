import { 
    StyleSheet,
    View,
    Image
} from "react-native";

import config from "../config";

export default function TitleBar() {
    return (
        <View style={styles.titleBar}>
            <Image
                style={styles.icon}
                source={require("../assets/icon.png")}
            />
            <Image
                style={styles.logo}
                source={require("../assets/logo_light.png")}
            />
        </View>
    )
}

const colors = config.colors
const styles = StyleSheet.create({
    titleBar: {
        paddingVertical: 10,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.dark,
    },
    icon: {
        height: 70,
        width: 70,
    },
    logo: {
        width: 180,
        resizeMode: "contain"
    }
})