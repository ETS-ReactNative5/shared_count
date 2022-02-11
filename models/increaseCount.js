export default function increaseCount (webSocket, count) {
    webSocket.send(JSON.stringify({
        "event": "count.inc",
        "total": count,
    }))
    console.log(`increasing count with websocket ${webSocket}`)
}