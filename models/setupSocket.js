export default function setupSocket (webSocket, setCounter) {
    console.log(`setting up websocket ${webSocket}`)
    webSocket.onmessage = function (e) {
        const data = JSON.parse(e.data);
        const total = data.counter_total;
        setCounter(total)
    }
}