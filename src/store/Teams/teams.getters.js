import Teams from "@/components/Teams";
import Player from "@/views/Player";

export default {
    search: (state) => {
        const List = []
        for (let i = 0; i < state.Teams.length; i++) {
            let x = {...state.Teams[i].Players}
            for (const player in x) {
                if (x[player].name === state.searchPlayer.name) {
                    List.push(x[player])
                }
            }
        }
        return List
    },
}