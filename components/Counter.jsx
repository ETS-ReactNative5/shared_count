import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import config from '../config'

export default function Counter ({count}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {count}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    text: {
        fontSize: 50,
    }
})
