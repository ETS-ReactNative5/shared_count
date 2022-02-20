const filterPlayers = (playerList) => {
    return playerList
    .filter(
        item => item[1]
    )
    .map(
        item => item[0]
    )
}
export default function setupSocket (webSocket, setCounter, setPlayers) {
    console.log(`setting up websocket ${webSocket}`)
    webSocket.onmessage = (e) => {
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
            default: break;
        }
    }
    console.log("socket configured")
}