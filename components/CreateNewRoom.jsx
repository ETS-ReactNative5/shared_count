import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";

import { Button } from "./elements";
import config from "../config";



export default function CreateNewRoom () {
    const colors = config.colors;
    const handleCreateNewRoom = () => {
        console.log("creating new room")
    }
    return (
        <View style={styles.container}>
            <Button 
                label="Create new room"
                action={handleCreateNewRoom}
                backgroundColor={colors.orange}
                textColor={colors.dark}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 100,
        paddingHorizontal: 20,
        width: "100%"
    },
})