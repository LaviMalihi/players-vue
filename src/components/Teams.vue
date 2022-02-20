<template>
  <div>
    <div class="search-wrapper">
      <q-btn id="search Btn" @click="LocalSearch(localPLayerName)"> search player</q-btn>
      <input type="text" v-model="localPLayerName" placeholder="Search player.."/>
      <!--      <label>Search title:</label>-->
    </div>

    <div class="q-pa-md">

      <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
      >

        <q-carousel-slide v-for="(team,index) of Teams" :name="index">
          <q-img class="image" @click="gotoTeam(team)" :src="team.imageUrl"/>
          <div class="deleteTeam">
            <q-btn class="delete" @click="removeTeam(team.id)">DELETE TEAM</q-btn>
          </div>
        </q-carousel-slide>

      </q-carousel>
    </div>
  </div>
</template>

<script>
import firebaseDataBase from "@/middleware/firebase/database";
import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'
import Player from "@/views/Player";
import database from "@/middleware/firebase/database";
// import mapMutations from "vuex/dist/vuex.mjs";

export default {
  name: "Teams",
  props: ['tableName'],
  data() {
    return {
      localPLayerName: '',
      slide: 0
    }
  },

  computed: {

    ...mapState('Teams', ['editedTeamId', 'Teams', 'editedTeamId', 'editedTeam']),
    ...mapState('Players', ['Players'])

  },

  methods: {

    ...mapGetters('Teams', ['search']),
    ...mapActions('Teams', ['deleteTeamActions', "getTeams", "getTeams", "middleSearch"]),
    ...mapMutations('Teams', ['setEditedTeamId', 'setSearchPlayerByName']),

    async LocalSearch(localPLayerName) {
      this.setSearchPlayerByName(localPLayerName)
      await this.middleSearch()
      console.log(this.Players, "11111111111111111")
      debugger
      await this.$router.push(`/showSearch`)
      debugger
    },

    async removeTeam(id) {
      this.setEditedTeamId(id);
      await this.deleteTeamActions()
      debugger
      await this.getTeams()
      debugger
    },
    gotoTeam(team) {
      this.$router.push(`team/${team.id}`)
    },

  },
  created() {
    this.getTeams()
  }
}
</script>

<style scoped>
#search Btn {
  color: #cccccc;
}

.image:fullscreen {
  height: 100%;
  margin: 10px;
}

.delete {
  color: blue;
  background: yellow;
}
</style>