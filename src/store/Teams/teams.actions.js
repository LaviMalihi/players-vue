import database from "../../middleware/firebase/database";
// import {mapGetters} from "vuex"
import gettersAction from "./teams.getters"
import mutPlayers from "../Players/players.mutations"


export default {


    getTeams: async ({commit}) => {
        debugger
        const Teams = await database.read({entity: `Teams`})
        debugger
        commit('setTeams', Teams)
    },

    deleteTeamActions: async ({state, commit}) => {
        debugger
        await database.remove({entity: `Teams/${state.editedTeamId}`, id: state.editedTeamId});

        const TeamId = state.editedTeamId;

        commit('resetEditedTeamId')

        commit('deleteTeam', TeamId)
    },

    updateTeam: async ({state, commit}) => {
        const team = {}

        Object.assign(team, state.editedTeam)
        team.id = state.editedTeam;

        //save in DB
        await database.update({entity: 'teams', id: team.editedTeam, team})

        //saves in store
        commit('resetEditedTeam')
        commit('resetEditedTeamId')
        commit('editTeam', team)
    },

    insertTeam: async ({state, commit}) => {

        const team = {}

        Object.assign(team, state.editedTeam)
        debugger

        //save in DB
        debugger
        team.id = (await database.create({entity: 'Teams', ent: team})).key

        //saves in store
        commit('resetEditedTeamId')

        commit('insertTeam', team)
    },

    setEditITeamID: async ({state, commit}) => {
        let team = {};
        if (state.Teams.length && state.Teams.find(team => team.id === state.editedTeam)) {
            team = state.items.find(item => item.id === state.editedTeam);
        } else {
            team = await database.getById({entity: 'teams', id: state.editedTeam})
        }
        commit('setNewItem', team)
    },

    middleSearch: async ({state,commit, getters}) => {
        debugger
        let res =  getters["search"]
        debugger
         commit('Players/setPlayers',res,{root:true})
        console.log(state)
        debugger
    }
}