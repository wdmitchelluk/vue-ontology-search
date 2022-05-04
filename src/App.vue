<template>
  <v-app class="main">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>

<style scoped>
  .main {
    background-color: #0F1111;
    color: #d8d4cf;
  }
</style>