import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from 'expo-camera';

import config from "../config";

export default function QRCodeReader({ exitReader, handleDeepLink }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const handleBarCodeScanned = ({ type, data }) => {
    alert(`Entering room ${data}.`);
    if (type === "org.iso.QRCode" || type === 256) handleDeepLink(data);
    setScanned(true);
  };

  useEffect(() => {
    (async () => {
      // const { granted } = await BarCodeScanner.requestPermissionsAsync();
      // setHasPermission(granted);
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  useEffect(() => scanned ? exitReader() : null, [scanned] )
  useEffect(() => {
    console.log(`permission status has changed ${hasPermission}`)
    if (hasPermission === null)  return <Text style={styles.message}>Requesting for camera permission.</Text>;
    if (hasPermission === false) return <Text style={styles.message}>No access to camera.</Text>;
  }, [hasPermission])

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio={"16:9"}
        barCodeScannerSettings={{
          barCodeTypes: ["qr"],
        }}
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
    padding: 40
  }
});
