export default function increaseCount (webSocket, count) {
    webSocket.send(JSON.stringify({
        "type": "count_inc",
        "total": count,
    }))
    console.log(`increasing count with websocket ${webSocket}`)
}