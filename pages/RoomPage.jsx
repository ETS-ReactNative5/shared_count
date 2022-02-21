import {useEffect, useState} from "react";
import * as Linking from "expo-linking";
import {StyleSheet, View, Text} from "react-native";
import {QRCodeView} from "../components/";

import {
    ShowRoom,
    Counter,
    CountButton,
    PlayerList,
    Menu,
} from "../components";

import {increaseCount, shareRoom, setupSocket} from "../models";

export default function RoomPage(
    {
        exitRoomPage,
        initialCount,
        roomId,
        wsUrl,
        username
    }) {
    const [counter, setCounter] = useState(initialCount);
    const [players, setPlayers] = useState([]);
    const [cleanWsAction, setCleanWsAction] = useState(()=>() => {
    })
    const [wsConnected, setWsConnected] = useState(false)
    const [webSocket, setWebSocket] = useState()

    const [showQrCode, setShowQrCode] = useState(false);
    const [shareLink, setShareLink] = useState("");

    const closeQrCode = () => setShowQrCode(false);
    const openQrCode = () => {
        console.log("Opening qrcode");
        setShowQrCode(true);
    };

    const exitAction = () => {
        console.log("disconnect from websocket");
        cleanWsAction()
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

    // Cria url para compartilhamento
    useEffect(() => {
        console.log(roomId);
        const urlQRCode = Linking.createURL("/enter-room", {
            queryParams: {roomName: roomId},
        });
        setShareLink(urlQRCode);
    }, [roomId]);

    // Seta o websocket
    useEffect(() => {
        setupSocket(wsUrl, username, setWebSocket, setCleanWsAction, setWsConnected, setCounter, setPlayers)
        return () => cleanWsAction()
    }, [wsUrl])
    useEffect(() => setCounter(initialCount), [initialCount]);

    return (
        <View style={styles.page}>
            {
                !wsConnected ? <Text>Desconectado</Text> :
                    <View>
                        <ShowRoom roomCode={roomId}/>
                        <Counter count={counter}/>
                        <CountButton increaseCount={count}/>
                        <PlayerList players={players}/>
                        <Menu
                            exitAction={exitAction}
                            shareAction={share}
                            qrCodeAction={qrCodeAction}
                        />
                        {showQrCode ? (
                            <QRCodeView closeQrCode={closeQrCode} link={shareLink}/>
                        ) : (
                            <></>
                        )}
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        height: "90%",
    },
});
