import postName from "./postName";

const filterPlayers = (playerList) => {
    return playerList
        .filter(
            item => item[1]
        )
        .map(
            item => item[0]
        )
}

export default function setupSocket(wsUrl, username,setWebSocket, setCleanWsAction, setWsConnected, setCounter, setPlayers) {
    console.log("Setting up ws with url: " + wsUrl);
    if (!wsUrl)
        return

    let webSocket = null
    let isForcedClosed = false
    let timeout = null

    function connect() {
        console.log("Starting connection to WebSocket Server");
        console.log("Websocket link: " + wsUrl);
        if (!wsUrl)
            return
        webSocket = new WebSocket(wsUrl);

        setWebSocket(webSocket)
        setCleanWsAction(() => () => cleanWebSocket())

        webSocket.onmessage = onMessage
        webSocket.onerror = onError
        webSocket.onclose = onClose
        webSocket.onopen = onOpen
    }

    function cleanWebSocket() {
        setWsConnected(false)
        isForcedClosed = true
        if (webSocket)
            webSocket.close()
        if (timeout) clearTimeout(timeout)
    }

    function onOpen(e) {
        postName(webSocket, username)
        setWsConnected(true)
    }

    function onMessage(e) {
        const data = JSON.parse(e.data);
        console.log(data)
        const event = data.event;
        switch (event) {
            case "count.inc": {
                setCounter(data.counter_total)
                break;
            }
            case "user.joined": {
                console.log(`user ${data.username} entered room`)
                break;
            }
            case "users.list": {
                setPlayers(filterPlayers(data.users))
                break;
            }
            default:
                break;
        }
    }

    function onClose(e) {
        if (isForcedClosed) {
            console.log("Socket is closed.", e.reason);
            return
        }
        console.log("Trying to reconnect in 1s")
        timeout = setTimeout(function () {
            connect();
        }, 1000);
    }

    function onError(e) {
        console.error(
            "Socket encountered error: ",
            e.message,
            "Closing socket"
        );
        webSocket.close();
    }

    connect()

}
