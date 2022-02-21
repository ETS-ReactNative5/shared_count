export default function createRoomAPI(endpoint, setRoomId, setInitialCount, setWsUrl) {
    const url = endpoint + "/createroom";

    console.log(`creating room on endpoint ${url}/`)
    
    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
        console.log(data)
        setRoomId(data.result.room_name)
        setInitialCount(data.result.counter_total)
        setWsUrl(data.result.ws_link)
    })
    .catch( e  => {
        console.log("An error ocurred when creating a room: ", e)
    })
}

