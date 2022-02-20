import { StyleSheet, View, TextInput, Text, Alert, Image } from "react-native";

import { useEffect, useState } from "react";

import { Button } from "./elements";
import config from "../config";

const verifyRoomId = (roomId) =>
  !(
    roomId === "" ||
    roomId.length !== 6 ||
    roomId.match("^[a-fA-F0-9]+$").length === 0
  );

export default function EnterRoomCode({ getName, setRoomId }) {
  const colors = config.colors;
  const [Id, setId] = useState("");

  const handleSubmit = () => {
    if (!verifyRoomId(Id)) {
      Alert.alert("Room name invalid.", "Please enter a valid room name.");
      return;
    }
    setRoomId(Id.toUpperCase());
    getName();
  };

  // useEffect(() => setId(Id.toUpperCase()), [Id])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter room code:</Text>
      <View style={styles.searchSection}>
        <TextInput
          placeholder="A1B2C3"
          style={[styles.textInputStyle, styles.input]}
          onChangeText={setId}
        ></TextInput>
        <View style={styles.inputIcon}>
          <Image
            style={styles.qrcodeIcon}
            source={require("../assets/icons/007-qr-code-read.png")}
            name="ios-search"
            size={10}
          />
        </View>
      </View>

      <Button
        label="Ok"
        action={handleSubmit}
        backgroundColor={colors.blue}
        textColor={colors.dark}
      />
      <View style={styles.space} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 20,
    width: "100%",
  },
  searchSection: {
    marginVertical: 15,
    paddingVertical: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputIcon: {
    flex: 1,
    height: 40,
    alignItems: "flex-end",
    borderBottomWidth: 2,
  },
  qrcodeIcon: {
    height: 25,
    marginTop: 8,
    width: 25,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
  },
  space: {
    marginVertical: 15,
    height: 40,
  },
  textInputStyle: {
    flex: 1,
    height: 40,
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  button: {},
});
