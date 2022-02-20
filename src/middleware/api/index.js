const axios = require('axios')
export default {
    get: (options) => {
        debugger
        return axios.get(`http://localhost:4000/${options.entity}`)
            .then(response => {
                debugger
                console.log(response);
                return response.data.result
            })
            .catch(error => {
                console.error(error);
            })
    },
    create: options => {
        return axios.post(`http://localhost:4000/${options.entity}`, {players: options.player})
            .then(response => {
                console.log(response)
                return
            })
    },
    remove: options => {
        return axios.delete(`http://localhost:4000/${options.entity}/${options.playerId}`)
            .then(response => {
                console.log(response)
                return response.data.result
            })
    },
    update: options => {
        debugger
        return axios.patch(`http://localhost:4000/${options.entity}/${options.playerId}`, {player: options.player})
            .then(response => {
                console.log(response)
                debugger
                return response.data.player
            })
    }
}

