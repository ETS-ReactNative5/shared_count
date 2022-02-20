import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import config from "../config";

export default function QRCodeReader({ exitReader, handleDeepLink }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    if (type === "org.iso.QRCode") handleDeepLink(data);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("pressionado");
          exitReader();
        }}
      >
        <Image
          source={require("../assets/icons/003-exit.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.toolbar}></View>
    </View>
  );
}

const colors = config.colors;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    height: 25,
    width: 25,
    marginBottom: 50,
    tintColor: colors.orange,
  },
});
