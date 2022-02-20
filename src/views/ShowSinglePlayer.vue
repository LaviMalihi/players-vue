<template>
  <div>
    <div class="">
<!--      {{this.state.name}}-->
<!--      {{this.editPlayer}}-->

<!--      <div v-if="!this.editPlayer" class="Add">Add player:</div>-->
<!--      <div v-if="this.editPlayer" class="Update">Update player:</div>-->
      <q-img :src="LocalEditedPlayer.imageUrl"> </q-img>
      <q-input outlined v-model="LocalEditedPlayer.name" label="player name"/>
      <q-input outlined v-model="LocalEditedPlayer.position" label="position"/>
      <q-input type="number" outlined v-model="LocalEditedPlayer.points" label="points"/>
      <q-input type="number" outlined v-model="LocalEditedPlayer.minute" label="minute"/>
      <q-input type="number" outlined v-model="LocalEditedPlayer.two" label="two"/>
      <q-input type="number" outlined v-model="LocalEditedPlayer.three" label="three"/>
      <q-input type="number" outlined v-model="LocalEditedPlayer.assist" label="assist"/>
      <q-input type="number" outlined v-model="LocalEditedPlayer.pir" label="pir"/>
      <q-btn @click="updateLocal()"> UPDATE </q-btn>

      <!--    <q-input type="number" outlined v-model="editedPlayer.Team" label="Team"/>-->
<!--      <q-file outlined v-model="image" id="fileUpload">-->
<!--        <template v-slot:prepend>-->
<!--          <q-icon name="attach_file"/>-->
<!--        </template>-->
<!--      </q-file>-->
<!--      <q-btn v-if="!this.editPlayer" color="white" text-color="black" label="upload and insert" @click="upload() "></q-btn>-->
<!--      <q-btn v-if="this.editPlayer" v-model="image" color="white" text-color="black" label="update" @click="update() "></q-btn>-->
      <!--    <q-btn v-if="player" color="white" text-color="black" label="update" @click="update()"></q-btn>-->
      <!--    <q-btn @click="upload()" >upload image</q-btn>-->

    </div>
  </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "ShowSinglePlayer",
  computed: mapState('Players', ['Players','editedPlayer','image']),

  data() {
    return {
      LocalEditedPlayer: {
        name: "",
        position: "",
        points: "",
        minute: "",
        two: "",
        three: "",
        assist: "",
        pir: "",
        imageUrl: "",
      }
    }
  },

  methods: {
    ...mapActions('Players',['updatePlayer',"getPlayer"]),
    ...mapMutations('Players', ['setEditedPlayerId','setEditedPlayer',]),
    async updateLocal(){
      debugger
      this.setEditedPlayer(this.LocalEditedPlayer);
      await this.updatePlayer()
      await this.$router.push(`/`)

    }

  },
  created() {
    //avoid reference
     this. LocalEditedPlayer = {...this.editedPlayer}
  }
}

</script>

<style scoped>

</style>