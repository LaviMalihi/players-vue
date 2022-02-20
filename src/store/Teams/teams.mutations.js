export default {

    setTeams: ((state, teams) => state.Teams = teams),

    setSearchPlayerByName: ((state, searchPlayer) => state.searchPlayer.name = searchPlayer),

    setEditedTeam: ((state ,team) => state.editedTeam = team),

    // setSingleTeam: ((state, teams) => state.project = project),

    setEditedTeamId: ((state, id) => state.editedTeamId = id),

    setTeamId: ((state, id) => state.TeamId = id),

    // setNewPro: ((state, newPro) => state.newPro = newPro),

    resetEditedTeamId: ((state) => state.editedTeamId = ''),

    resetEditedTeam: ((state) => {
        for (const key in state.editedTeam) {
            state.editedTeam[key] = ''
        }
        delete state.editedTeam .id;
    }),

    editTeam: ((state, team) => {
        const index = state.Teams.findIndex(p => p.id === team.id)
        state.Teams.splice(index, 1, team)
    }),

    deleteTeam: ((state, teamId) => {
        const index = state.Teams.findIndex(p => p.id === teamId)
        state.Teams.splice(index, 1)
    }),

    insertTeam: ((state, team) => {
        state.Teams.push(team)
    }),


}