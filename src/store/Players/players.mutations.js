export default {

    setPlayers: ((state, players) => state.Players = players),

    setPlayer: ((state, player) => state.Players = player),

    setEditedPlayer: ((state ,player) => state.editedPlayer = player),

    // setSingleTeam: ((state, teams) => state.project = project),

    setEditedPlayerId: ((state, id) => state.editedPlayerId = id),

    // setProjectId: ((state, id) => state.projectId = id),

    // setNewPro: ((state, newPro) => state.newPro = newPro),

    resetEditedPlayerId: ((state) => state.editedPlayerId = ''),

    resetEditedPlayer: ((state) => {
        for (const key in state.editedPlayer) {
            state.editedPlayer[key] = ''
        }
        delete state.editedPlayer .id;
    }),

    editPlayer: ((state, player) => {
        const index = state.Players.findIndex(p => p.id === player.id)
        state.Players.splice(index, 1, player)
    }),

    deletePlayer: ((state, playerId) => {
        const index = state.Players.findIndex(p => p.id === playerId)
        state.Players.splice(index, 1)
    }),

    insertPlayer: ((state, player) => {
        state.Players.push(player)
    }),


}