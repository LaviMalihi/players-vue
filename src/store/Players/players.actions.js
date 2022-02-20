import database from "../../middleware/firebase/database/index";

export default {
    getPlayer: async ({commit, rootState}) => {

        const Players = await database.read({entity: `Teams/${rootState.Teams.editedTeamId}/Players/${this.editedPlayer.id}`})

        commit('setPlayers', Players)
    },

    getPlayers: async ({commit, rootState}) => {

        let Players = "";

        if (rootState.Teams.editedTeamId) {
            debugger
            Players = await database.read({entity: `Teams/${rootState.Teams.editedTeamId}/Players`})
        } else {
            debugger
            Players = await database.read({entity: `Teams/${rootState.Players}/Players`})
        }
        debugger
        commit('setPlayers', Players)
    },

    deletePlayer: async ({state, commit, rootState}) => {
        debugger

        await database.remove({
            entity: `Teams/${rootState.Teams.editedTeamId}/Players/${state.editedPlayerId}`,
            id: state.editedPlayerId
        });
        debugger

        const PlayerId = state.editedPlayerId;

        commit('resetEditedPlayerId')

        commit('deletePlayer', PlayerId)
    },

    readBeforeUpdate: async ({state, rootState}) => {

        const player = {}
        Object.assign(player, state.editedPlayer)
        player.id = state.editedPlayerId;
        debugger
        await database.readObj({entity: `Teams/${rootState.Teams.editedTeamId}/Players/${player.id}`})
    },

    updatePlayer: async ({state, commit, rootState}) => {
        const player = {}
        Object.assign(player, state.editedPlayer)
        player.id = state.editedPlayerId;
        debugger

        //save in DB
        await database.update({
            entity: `Teams/${rootState.Teams.editedTeamId}/Players/${player.id}`,
            id: player.id,
            player
        })
        debugger

        //saves in store
        commit('resetEditedPlayer')
        commit('resetEditedPlayerId')
        commit('editPlayer', player)
    },

    actionInsert: async ({state, commit, rootState}) => {
        debugger
        const player = {}
        Object.assign(player, state.editedPlayer)
        debugger

        //save in DB
        player.id = (await database.create({entity: `Teams/${rootState.Teams.editedTeamId}/Players`, ent: player})).key
        debugger

        //saves in store
        commit('resetEditedPlayerId')

        commit('insertPlayer', player)
    },

    setEditIPlayerID: async ({state, commit}) => {

        let player = {};
        if (state.Players.length && state.Players.find(player => player.id === state.editedPlayer)) {
            player = state.players.find(player => player.id === state.editedPlayer);
        } else {
            player = await database.getById({entity: 'players', id: state.editedPlayer})
        }
        commit('setNewPlayer', player)
    }
}