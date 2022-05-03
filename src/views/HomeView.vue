<template>
  <Search/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Search from '../components/Search.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Search,
  },
});
</script>
