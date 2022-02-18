import { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

import config from "../config";

export default function QRCodeView({ link, closeQrCode }) {
  return (
    <View style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={closeQrCode}>
        <View style={styles.container} behavior="padding">
          <View style={styles.window} onPress={closeQrCode}>
            <QRCode
              //QR code value
              value={link ? link : "NA"}
              //size of QR Code
              size={300}
              //Color of the QR Code (Optional)
              color="black"
              //Background Color of the QR Code (Optional)
              backgroundColor="white"
              //Logo of in the center of QR Code (Optional)
              //Center Logo size  (Optional)
              logoSize={50}
              //Center Logo margin (Optional)
              logoMargin={2}
              //Center Logo radius (Optional)
              logoBorderRadius={15}
              //Center Logo background (Optional)
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const colors = config.colors;
const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 30,
  },
  message: {
    paddingHorizontal: 20,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 15,
    height: 40,
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  buttons: {
    width: "100%",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: "50%",
    marginVertical: 15,
  },
});
