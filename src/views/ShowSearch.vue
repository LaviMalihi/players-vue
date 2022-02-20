<template>
<div>
  <card-player tableName="players"></card-player>
</div>

</template>

<script>
import CardPlayer from "@/components/CardPlayer";
import {mapActions} from "vuex";

export default {
  name: "showSearch",
  components:{CardPlayer},
  methods:{
    ...mapActions('Players',['getPlayers'])
  },
  created() {
    this.getPlayers()
  }
}
</script>

<style scoped>

</style>