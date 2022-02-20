<template>
  <div class="">
    <!--    {{editedPlayer}}-->
    <div v-if="!player" class="Add">Add player:</div>
    <div v-if="player" class="Update">Update player:</div>
    <q-input outlined v-model="localEditedPlayer.name" label="player name"/>
    <q-input outlined v-model="localEditedPlayer.position" label="position"/>
    <q-input type="number" outlined v-model="localEditedPlayer.points" label="points"/>
    <q-input type="number" outlined v-model="localEditedPlayer.minute" label="minute"/>
    <q-input type="number" outlined v-model="localEditedPlayer.two" label="two"/>
    <q-input type="number" outlined v-model="localEditedPlayer.three" label="three"/>
    <q-input type="number" outlined v-model="localEditedPlayer.assist" label="assist"/>
    <q-input type="number" outlined v-model="localEditedPlayer.pir" label="pir"/>
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
import firebaseDataBase from '../middleware/firebase/database'
import firabaseFiles from '../middleware/firebase/files'
import firebase from "firebase/compat";
import firebaseFiles from "@/middleware/firebase/files";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  computed: mapState('Players', ['editedPlayer']),
  name: "AddPlayer",
  props: ['tableName', 'player'],
  data() {
    return {
      Players: [],
      image: [],

      localEditedPlayer: {
        name: "",
        position: "",
        points: "",
        minute: "",
        two: "",
        three: "",
        assist: "",
        pir: "",
        teamId: "",
        imageUrl: "",
        id:""
      }
    }
  },


  methods: {
    ...mapActions('Players', ['getPlayers', 'actionInsert']),
    ...mapMutations('Players', ['setEditedPlayer']),
    async upload() {
      let path = this.tableName
      this.localEditedPlayer.imageUrl = await firebaseFiles.uploadFile(this.image, path)
      this.localSetEditedPlayer()
      debugger
      await this.actionInsert()
      debugger

    },

    // insert(teamId) {
    //   debugger
    //   firebaseDataBase.create({entity: `Teams/${teamId}/${this.tableName}`, player: this.editedPlayer})
    //       .then(() => {
    //         this.$emit('playerAdded')
    //       })
    // },

    localSetEditedPlayer() {
      this.setEditedPlayer(this.localEditedPlayer);

    },

      async update() {
      console.log(this.image)
      debugger

      //deal with the problem that the program continue
      let save = await firebaseFiles.uploadFile(this.image)
      this.localEditedPlayer.imageUrl = save;
      this.image.push(save)
      debugger
      console.log(this.image)
      await firebaseDataBase.update({entity: this.tableName, playerId: this.player.id, player: this.localEditedPlayer})
      debugger
      await this.$router.push('/home')
    }
  },
  created() {
    debugger
    if (this.player)
      this.editedPlayer = this.player
  }
}

</script>
<style scoped>
.Add {
  color: brown;
}

.Update {
  color: chocolate;
}

</style>