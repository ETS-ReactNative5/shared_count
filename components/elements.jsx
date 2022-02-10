import {
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";

function Button ({ label, action, backgroundColor, textColor}) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: backgroundColor,
            height:50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            shadowColor: "black",
            elevation: 8,
        },
        text: {
            color: textColor
        }
    })

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={action}
        >
            <Text 
                style={styles.text}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
};



export {
    Button
}