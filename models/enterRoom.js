export default function enterRoom(apiEndpoint, setWsUrl, roomId, setInitialCount, setEnterSuccess) {
    const axios = require('axios')
    console.log(`Entering room on roomid ${roomId}.`);

    let url = `${apiEndpoint}/room/${roomId}/`
    axios.get(url)
    .then(result => {
        const data = result.data
        setInitialCount(data.result.counter_total)
        setWsUrl(data.result.ws_link)
        setEnterSuccess(true)
    })
    .catch(e => {
        setEnterSuccess(false)
        alert("The room you requested does not exists.")
        console.log("An error ocurred when creating a room: ", e)
    })
}