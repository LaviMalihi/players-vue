<template xmlns:card-player="http://www.w3.org/1999/html">
  <div class="home">
    <AddPlayer :tableName="'players'" @playerAdded = "reloadTable"/>
    <TableViewer :tableName= "'players'":isReload="isReload" @playerRemoved="reloadTable"/>
    <card-player :tableName="'players'" :isReload="isReload" @playerRemoved="reloadTable"></card-player>
  </div>
</template>

<script>

import AddPlayer from "@/components/AddPlayer";
import TableViewer from "@/components/TableViewer";
import CardPlayer from "@/components/CardPlayer";

export default {
  name: 'Home',
  components: {
    CardPlayer,
    AddPlayer, TableViewer
  },
  data(){
      return{
        isReload: false,
      }
  },
  methods:{
    reloadTable(){
      this.isReload = !this.isReload

    }
  }
}
</script>
