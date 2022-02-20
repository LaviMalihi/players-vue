<template>
  <div id = "app">
    <teams :tableName="'teams'"></teams>
    <AddTeam :tableName="'teams'"></AddTeam>
  </div>
</template>

<script>
import Teams from "@/components/Teams";
import AddTeam from "@/components/AddTeam";

export default {
  name: "ShowTheTeams",
  components: {
    AddTeam,
    Teams,
  },
  data() {
    return {
      // isReload: false,
    }
  },
  methods: {
    // reloadTable() {
    //   this.isReload = !this.isReload
    // },
    // gotoTeam(id) {
    //   this.$router.push(`/ShowTeam`)
    // }
  },
}
</script>

<style scoped>
#app{
  background-image:url("https://i.pinimg.com/originals/c9/2f/d6/c92fd695d4c8738eb6ed82de16a37fe3.jpg");
}
</style>