<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Ontology Lookup</h1>
      </v-col>
    </v-row>
   <Search/>
  </v-container>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue'
  import Search from '../components/search/Search.vue'
  
  export default defineComponent({
    name: 'Home',
    components: {
      Search
  }
});
</script>