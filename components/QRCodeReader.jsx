import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import config from "../config";

export default function QRCodeReader({ exitReader, handleDeepLink }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    if (type === "org.iso.QRCode" || type === 256) handleDeepLink(data);
    setScanned(true);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  useEffect(() => scanned ? exitReader() : null, [scanned] )
  useEffect(() => {
    if (hasPermission === null)  return <Text style={styles.message}>Requesting for camera permission</Text>;
    if (hasPermission === false) return <Text style={styles.message}>No access to camera</Text>;
  }, [hasPermission])

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <TouchableOpacity
        onPress={exitReader}
        style={styles.exit}
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
    tintColor: colors.dark,
  },
  exit: {
    backgroundColor: colors.red,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 50,
    borderRadius: 50,
  },
  message: {
    padding: 20
  }
});
