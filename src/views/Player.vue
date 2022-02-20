<template>
  <div class="">
    <!--    {{editedPlayer}}-->
    <div v-if="player" class="Update">Update player:</div>
    <q-input outlined v-model="player.name" label="player name"/>
    <q-input outlined v-model="player.position" label="position"/>
    <q-input type="number" outlined v-model="player.points" label="points"/>
    <q-input type="number" outlined v-model="player.minute" label="minute"/>
    <q-input type="number" outlined v-model="player.two" label="two"/>
    <q-input type="number" outlined v-model="player.three" label="three"/>
    <q-input type="number" outlined v-model="player.assist" label="assist"/>
    <q-input type="number" outlined v-model="player.pir" label="pir"/>
    <!--    <q-input type="number" outlined v-model="editedPlayer.Team" label="Team"/>-->
    <q-file outlined v-model="image" id="fileUpload">
      <template v-slot:prepend>
        <q-icon name="attach_file"/>
      </template>
    </q-file>
    <q-btn v-if="!player" color="white" text-color="black" label="upload and insert" @click="upload() "></q-btn>
    <q-btn v-if="player" v-model="image" color="white" text-color="black" label="update" @click="update() "></q-btn>
    <!--    <q-btn v-if="player" color="white" text-color="black" label="update" @click="update()"></q-btn>-->
    <!--    <q-btn @click="upload()" >upload image</q-btn>-->
  </div>
</template>
<script>
import localStorageDriver from '../middleware/local-storage'
import firebaseDataBase from "../middleware/firebase/database";
import api from '../middleware/api'
import {mapActions, mapMutations} from "vuex";

export default {
  name: "PlayerView",
  components: {
    // CardPlayer,
    // AddPlayer,
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations('Teams', ['setEditedTeamId']),
    ...mapActions('Players', ['getPlayers']),

    // getPlayerById() {
    //   debugger
    //   firebaseDataBase.readObj({entity: `${this.tableName}/${this.$route.params.id}`})
    //       .then(result => {
    //         this.player = result;
    //         this.flag = true
    //       })
    //   debugger
    // }

  },
  created() {
    if (this.$route.params.id) {
      this.getPlayerById()
    }
  }
}
</script>

<style scoped>

</style>