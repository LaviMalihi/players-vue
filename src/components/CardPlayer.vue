<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card v-for="(player,index) of Players" class="my-card">
      {{ player.id }}
      <img :src="player.imageUrl">
      <q-card-section>
        <div class="text-h6 player-title">{{ player.name }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">{{ player.position }}position:</q-card-section>
      <q-card-section class="q-pt-none">points:{{ player.points }}</q-card-section>
      <q-card-section class="q-pt-none">minutes:{{ player.minute }}</q-card-section>
      <q-card-section class="q-pt-none">%2: {{ player.two }}</q-card-section>
      <q-card-section class="q-pt-none">%3: {{ player.three }}</q-card-section>
      <q-card-section class="q-pt-none">assists: {{ player.assist }}</q-card-section>
      <q-card-section class="q-pt-none">pir: {{ player.pir }}</q-card-section>
      <q-btn @click="removePlayer(player.id)">מחיקה</q-btn>
      <q-btn @click="read(player)">צפייה ועדכון</q-btn>
    </q-card>

  </div>
</template>

<script>
import AddPlayer from "@/components/AddPlayer";
import firebaseFile from "../middleware/firebase/files/index"
import firebaseDataBase from "../middleware/firebase/database";
import {mapActions, mapMutations, mapState} from "vuex";
import database from "@/middleware/firebase/database";


export default {
  name: "CardPlayer",
  props: ['tableName', 'isReload'],
  computed: mapState('Players', ['Players']),

  data() {
    return {}
  },

  methods: {
    ...mapActions('Players', ["readBeforeUpdate", 'getPlayers', 'deletePlayer', 'updatePlayer', "updatePlayer"]),
    ...mapMutations('Players', ['setEditedPlayerId', 'setEditedPlayer']),

    async removePlayer(id) {
      this.setEditedPlayerId(id);
      await this.deletePlayer()

    },
    read(player) {
      this.setEditedPlayer(player)
      this.setEditedPlayerId(player.id)
      debugger
      this.$router.push(`/showSinglePlayer`)
    },

    gotoPlayer(id) {
      this.$router.push(`player/${id}`)
      // this.setEditedPlayerId(id);
      // this.updatePlayer()
    }
  },
  watch: {
    isReload() {
      debugger
      this.read()
    }
  },
  created() {
    this.getPlayers();
    debugger
  }
}

</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
  text-align: center;
}

.player-title {
  background: blue;
}
</style>