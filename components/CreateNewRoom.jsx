import {
    View,
    StyleSheet,
} from "react-native";

import { Button } from "./elements";
import config from "../config";

export default function CreateNewRoom ({enterRoom}) {
    const colors = config.colors;
    const handleCreateNewRoom = () => {
        // dummy room id; to be api call
        const roomId = "A1B2C3"
        enterRoom(roomId);
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