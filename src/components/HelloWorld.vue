<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.png">
    {{ title }}
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'HelloWorld',
  props: ['title']
}
</script>
