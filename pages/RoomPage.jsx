import { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import { StyleSheet, View } from "react-native";
import { QRCodeView } from "../components/";

import {
  ShowRoom,
  Counter,
  CountButton,
  PlayerList,
  Menu,
} from "../components";

import { increaseCount, exitRoom, shareRoom, setupSocket } from "../models";

export default function RoomPage({
  exitRoomPage,
  webSocket,
  initialCount,
  roomId,
}) {
  const [counter, setCounter] = useState(initialCount);
  const [players, setPlayers] = useState([]);
  const [showQrCode, setShowQrCode] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const closeQrCode = () => setShowQrCode(false);
  const openQrCode = () => {
    console.log("Opening qrcode");
    setShowQrCode(true);
  };

  const exitAction = () => {
    console.log("disconnect from websocket");
    exitRoom(webSocket);
    exitRoomPage();
  };
  const qrCodeAction = () => {
    openQrCode();
  };
  const count = () => {
    increaseCount(webSocket, count);
  };
  const share = () => {
    shareRoom(roomId, shareLink);
  };

  useEffect(() => {
    console.log(roomId);
    const urlQRCode = Linking.createURL("/enter-room", {
      queryParams: { roomName: roomId },
    });
    setShareLink(urlQRCode);
  }, [roomId]);

  useEffect(() => setupSocket(webSocket, setCounter, setPlayers), [roomId]);
  useEffect(() => setCounter(initialCount), [initialCount]);

  return (
    <View style={styles.page}>
      <ShowRoom roomCode={roomId} />
      <Counter count={counter} />
      <CountButton increaseCount={count} />
      <PlayerList players={players} />
      <Menu
        exitAction={exitAction}
        shareAction={share}
        qrCodeAction={qrCodeAction}
      />
      {showQrCode ? (
        <QRCodeView closeQrCode={closeQrCode} link={shareLink} />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "90%",
  },
});
