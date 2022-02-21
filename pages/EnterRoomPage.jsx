import {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";

import {
    EnterRoomCode,
    CreateNewRoom,
    GetName,
    QRCodeReader,
} from "../components";

import {createRoomAPI, enterRoom} from "../models";

import config from "../config";

export default function EnterRoomPage(
    {
        goToRoomPage,
        setInitialCount,
        setRoomId,
        setWsUrl,
        roomId,
        setRoomFromUrl,
        roomFromUrl,
        handleDeepLink,
        setUsername
    }) {
    const [showQrCodeReader, setShowQrCodeReader] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const closePrompt = () => setShowPrompt(false);
    const openPrompt = () => setShowPrompt(true);


    useEffect(() => {
        if (roomFromUrl) {
            setRoomId(roomFromUrl);
            openPrompt();
        }
        setRoomFromUrl(null);
    }, [roomFromUrl]);

    const createRoom = () => createRoomAPI(config.apiEndpoint, setRoomId, setInitialCount, setWsUrl);
    const enter = () => {
        goToRoomPage();
        enterRoom(
            config.apiEndpoint,
            setWsUrl,
            roomId,
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
                    <CreateNewRoom getName={openPrompt} createRoom={createRoom}/>
                </View>
            }
            {showPrompt ? <GetName closePrompt={closePrompt} enter={enter} setUsername={setUsername}/> : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        width: "100%",
        minHeight: "90%",
    },
});
