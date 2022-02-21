import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

import config from "../config";

export default function QRCodeView({ link, closeQrCode }) {
  return (
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
  );
}

const colors = config.colors;
const styles = StyleSheet.create({
  container: {
    height: "80%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    
  },
  message: {
    paddingHorizontal: 20,
  },
  window: {
    width: "80%",
    marginHorizontal: "auto",
    paddingHorizontal: 10,
    paddingVertical: 20,
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "black",
    elevation: 30,
  },
});
