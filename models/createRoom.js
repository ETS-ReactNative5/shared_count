export default function createRoom(endpoint, setRoomId) {
    const url = endpoint + "/createroom";

    console.log(`creating room on endpoint ${endpoint}`)
    
    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
        const link = data.result.link
        setRoomId(link.slice(link.length - 6))
    })
}

