<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
      {{ image }}
      <q-table
          :title="tableName"
          :data="rows"
          :columns="columns"
          row-key="name"
          binary-state-sort
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.name }}</q-td>
            <q-td key="position" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.position }}</q-td>
            <q-td key="points" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.points }}</q-td>
            <q-td key="minute" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.minute }}</q-td>
            <q-td key="two" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.two }}</q-td>
            <q-td key="three" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.three }}</q-td>
            <q-td key="assist" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.assist }}</q-td>
            <q-td key="pir" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.pir }}</q-td>
            <q-td key="Team" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.Team }}</q-td>
            <q-td key="urlImage" :props="props" @click="gotoPlayer(props.row.id)">{{ props.row.urlImage }}</q-td>
            <q-td key="actions" :props="props">

              <q-btn @click="removePlayer(props.row.id)">מחיקה</q-btn>
              <q-btn @click="upload()">upload</q-btn>
              <q-file outlined v-model="image" id="fileUpload">
                <template v-slot:prepend>
                  <q-icon name="attach_file"/>
                </template>
              </q-file>

            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>
<script>

import {mapState, mapActions, mapMutations} from 'vuex'

// import localStorageDriver from '../middleware/local-storage';
//import api from '../middleware/api';
import firebaseDataBase from "../middleware/firebase/database";
import firebaseFiles from '../middleware/firebase/files'
// import {mapActions, mapMutations, mapState} from 'vuex'


export default {
  name: "TableViewer",
  props: ['tableName', 'isReload'],
  data() {
    return {
      flag: false,
      image: [],
      columns: [
        {name: 'name', required: true, label: 'name player', align: 'left', field: row => row.name},
        {name: 'position', align: 'center', label: 'position', field: 'position', sortable: true},
        {name: 'points', label: 'points', field: 'points', sortable: true},
        {name: 'minute', label: 'minute', field: 'minute'},
        {name: 'two', label: 'two', field: 'two'},
        {name: 'three', label: 'three', field: 'three'},
        {name: 'assist', label: 'assist', field: 'assist', sortable: true,},
        {name: 'pir', label: 'pir', field: 'pir', sortable: true,},
        {name: 'Team', label: 'Team', field: 'Team', sortable: true,},
        {name: 'actions', label: 'actions', field: 'actions'},
        {name: 'image', label: 'actions', field: 'imageUrl'}
      ],
      rows: []
    }
  },
  computed: mapState('Teams', ['editedTeamId', 'Teams']),
  methods: {
    upload() {
      firebaseFiles.uploadFile(this.image)
      debugger
    },
    read() {
      firebaseDataBase.read({entity: this.tableName})
          .then(result => {
            this.rows = result;
          })
    },
    async removePlayer(id) {
      await firebaseDataBase.remove({entity: this.tableName, playerId: id});
      this.read();
      this.$emit('playerRemoved')
    },

    gotoPlayer(id) {
      console.log(id)
      this.$router.push(`player/${id}`)
    }
  },

  created() {
    this.read()
    firebaseDataBase.getRef({entity: this.tableName})
        .on('child_changed', (snapshot) => {
          this.read()
        });
  },

  watch: {
    isReload() {
      this.read()
    }
  }
}
</script>

<style scoped>


</style>