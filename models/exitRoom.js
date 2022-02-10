export default function exitRoom (webSocket) {
    webSocket.close()
    console.log(`closing connection with websocket ${webSocket}`)
}