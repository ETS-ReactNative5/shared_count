export default function createRoom(endpoint, setRoomId) {
    const url = endpoint + "/createroom";

    console.log(`creating room on endpoint ${url}/`)
    
    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
        console.log(data)
        const link = data.result.link
        setRoomId(link.slice(link.length - 6))
    })
    .catch( e  => {
        console.log("An error ocurred when creating a room: ", e)
    })
}

