import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import {
  EnterRoomCode,
  CreateNewRoom,
  GetName,
  QRCodeReader,
} from "../components";

import { createRoom, enterRoom } from "../models";

import config from "../config";

export default function EnterRoomPage({
  goToRoomPage,
  setInitialCount,
  setWebSocket,
  setRoomId,
  roomId,
  setRoomFromUrl,
  roomFromUrl,
  handleDeepLink,
}) {
  const [showQrCodeReader, setShowQrCodeReader] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const closePrompt = () => setShowPrompt(false);
  const openPrompt = () => setShowPrompt(true);

  const createRoomId = () => createRoom(config.apiEndpoint, setRoomId, setInitialCount);

  useEffect(() => {
    if (roomFromUrl) {
      setRoomId(roomFromUrl);
      openPrompt();
    }
    return setRoomFromUrl(null);
  }, [roomFromUrl]);

  const enter = (userName) => {
    goToRoomPage();
    enterRoom(
      config.webSocketEndpoint,
      config.apiEndpoint,
      roomId,
      userName,
      setWebSocket,
      setInitialCount
    );
  };

  return (
    <View style={styles.page}>
      {showQrCodeReader ? 
        <QRCodeReader
          exitReader={() => setShowQrCodeReader(false)}
          handleDeepLink={handleDeepLink}
        /> :
        <View>
          <EnterRoomCode
            getName={openPrompt}
            setRoomId={setRoomId}
            setShowQrCodeReader={setShowQrCodeReader}
          />
          <CreateNewRoom getName={openPrompt} createRoom={createRoomId} />
        </View>
      }
      {showPrompt ? <GetName closePrompt={closePrompt} enter={enter} /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: "100%",
    minHeight: "90%",
  },
});
