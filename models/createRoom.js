export default function createRoom(endpoint, setRoomId, setInitialCount) {
    const url = endpoint + "/createroom";

    console.log(`creating room on endpoint ${url}/`)
    
    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
        console.log(data)
        setRoomId(data.result.room_name)
        setInitialCount(data.result.counter_total)
    })
    .catch( e  => {
        console.log("An error ocurred when creating a room: ", e)
    })
}

