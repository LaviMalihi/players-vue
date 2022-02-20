<template>
  <div class="">
    <div v-if="!team" class="Add">Add team:</div>
    <div v-if="team" class="Update">Update team:</div>

    <q-input outlined v-model="localEditedTeam.name" label="team name"/>
    <q-input outlined v-model="localEditedTeam.country" label="team country"/>
    <q-input outlined v-model="localEditedTeam.city" label="team city"/>
    <q-file outlined v-model="image" label="upload image" id="fileUpload">
      <template v-slot:prepend>
        <q-icon name="attach_file"/>
      </template>
    </q-file>
    <!--    <q-btn v-if="!editedTeam" color="white" text-color="black" label="insert" @click="localSetEditedTeam();insertTeam(); updateTeam(); goToHome"></q-btn>-->
    <!--    <q-btn v-if="editedTeam.id" v-model="image" color="white" text-color="black" label="update" @click="updateTeam(); goToHome"></q-btn>-->
    <!--    <q-btn v-if="editedTeam.id" color="white" text-color="black" label="update" @click="update()"></q-btn>-->
    <q-btn @click="upload(); goToHome">upload image and insert</q-btn>
  </div>
</template>

<script>
import firebaseDataBase from '../middleware/firebase/database'
import firabaseFiles from '../middleware/firebase/files'
import firebase from "firebase/compat";
import firebaseFiles from "@/middleware/firebase/files";
import {mapActions, mapMutations, mapState} from 'vuex'


export default {
  name: "AddTeam",
  props: ['tableName', 'team'],
  data() {
    return {
      image: [],
      localEditedTeam: {
        name: "",
        imageUrl: "",
        country: "",
        city: ""
      }
    }
  },
  computed: mapState('Teams', ['editedTeam']),

  methods: {

    ...mapActions('Teams', ['insertTeam', 'updateTeam']),
    ...mapMutations('Teams', ['setEditedTeam','setEditedTeamId']),

    async upload() {
      this.localEditedTeam.imageUrl = await firebaseFiles.uploadFile(this.image, this.tableName)
      debugger
      this.localSetEditedTeam()
      this.setEditedTeamId()
      await this.insertTeam()
    },

    localSetEditedTeam() {
      this.setEditedTeam(this.localEditedTeam);
    },

    goToHome() {
      this.$router.push('/home')
    },

    // insert() {
    //   firebaseDataBase.create({entity: this.tableName, team: this.editedTeam})
    //       .then(() => {
    //         this.$emit('teamAdded')
    //       })
    // },

    // async updateTeam() {
    //   let save = await firebaseFiles.uploadFile(this.image)
    //   this.editedTeam.imageUrl = save;
    //   await firebaseDataBase.update({entity: this.tableName, playerId: this.team.id, player: this.editedTeam})
    //   await this.$router.push('/home')
    // }
  },
  // created() {
  //   if (this.team)
  //     this.editedTeam = this.team
  // }
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