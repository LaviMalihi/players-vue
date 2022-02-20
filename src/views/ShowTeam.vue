<template>
  <div id = "app">
   <br>
    <card-player tableName="players"></card-player>
    <add-player tableName="players"></add-player>
  </div>
</template>

<script>
import CardPlayer from "@/components/CardPlayer";
import AddPlayer from "@/components/AddPlayer";
import {mapMutations,mapActions} from "vuex";


export default {
  name: "ShowTeam",
  components: {AddPlayer, CardPlayer},

  methods: {
    ...mapMutations('Teams', ['setEditedTeamId']),
    ...mapActions('Players',['getPlayers'])
  },
  created() {
    this.setEditedTeamId(this.$route.params.id)
    this.getPlayers()
  },
}

</script>

<style scoped>
#app{
  /*background-image: url("");*/

}

</style>