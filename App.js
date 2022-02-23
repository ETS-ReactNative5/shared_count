// to publish run expo publish
// to start run npm start or expo start
import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import * as Linking from "expo-linking"
import { Platform } from 'react-native';
import {
    StyleSheet,
    SafeAreaView,
    View,
    StatusBar,
} from 'react-native';

import {
    TitleBar,
} from "./components";

import {
    RoomPage,
    EnterRoomPage,
    NotConnected
} from "./pages"

import config from './config';

export default function App() {
    const [page, setPage] = useState(0);
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("")
    const [wsUrl, setWsUrl] = useState()
    const [initialCount, setInitialCount] = useState();
    const [connected, setConnected] = useState(true);
    const [roomFromUrl, setRoomFromUrl] = useState(null);

    const goToRoomPage = () => setPage(1);
    const exitRoom = () => setPage(0);
    const handleDeepLink = (url) => {
        const data = Linking.parse(url)
        console.log(data)
        const queryParams = data.queryParams
        if (queryParams && queryParams.roomName) {
            setRoomFromUrl(queryParams.roomName)
            exitRoom()
        }
    }
    const listenerUrlLinking = (event) => handleDeepLink(event.url);

    const pages = [
        <EnterRoomPage
            goToRoomPage={goToRoomPage}
            setWsUrl={setWsUrl}
            setInitialCount={setInitialCount}
            setRoomId={setRoomId}
            roomId={roomId}
            setRoomFromUrl={setRoomFromUrl}
            roomFromUrl={roomFromUrl}
            handleDeepLink={handleDeepLink}
            setUsername={setUsername}
        />,
        <RoomPage
            wsUrl={wsUrl}
            exitRoomPage={exitRoom}
            initialCount={initialCount}
            roomId={roomId}
            username={username}
        />
    ]

    // Getting connection state
    useEffect(() => NetInfo.addEventListener(state => setConnected(state.isConnected)), [])

    // In case the app is openned by link or qrcode
    useEffect(() => {
        const getInitialUrl = async () => {
            const initialUrl = await Linking.getInitialURL()
            if (initialUrl) handleDeepLink(initialUrl)
        }

        if (!roomFromUrl) getInitialUrl();
        Linking.addEventListener('url', listenerUrlLinking)
        return () => Linking.removeEventListener('url');
    }, [])


    return (
        <SafeAreaView style={[
            styles.outside,
            styles.AndroidSafeArea,
        ]}>
            <View style={[
                styles.container,
                Platform.OS === "web" ? {maxWidth: 800} : {}
            ]}>
                <TitleBar/>
                {
                    !connected ?
                        <NotConnected/> :
                        pages[page]
                }
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    );
}

const colors = config.colors
const styles = StyleSheet.create({
    outside: {
        backgroundColor: colors.light,
        height: "100%",
        minHeight: "100%",
        // display: "flex",
        // justifyContent:"center"
    },
    container: {
        width: "100%",
        marginHorizontal: "auto"
    },
});
