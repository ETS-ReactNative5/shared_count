export default function enterRoom(apiEndpoint, setWsUrl, roomId, setInitialCount) {
    // validate entering room connection by http
    // <url>/room/<roomId>/
    // create websocket connection
    // <url>/ws/counter/<roomId>
    console.log(`Entering room on roomid ${roomId}.`);

    let url = `${apiEndpoint}/room/${roomId}/`
    console.log(url)
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setInitialCount(data.result.counter_total)
            setWsUrl(data.result.ws_link)
        })
        .catch(e => {
            console.log("An error ocurred when creating a room: ", e)
        })



}