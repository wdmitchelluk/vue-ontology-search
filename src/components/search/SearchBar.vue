<template>
  <div>
    <v-text-field
      v-model="value"
      color="cyan darken"
      label="Search"
      placeholder="Start typing..."
      :loading = "isLoading"
      prepend-inner-icon="mdi-magnify"
      @keyup.enter="$emit('searchClicked', value)"
    >
    <template v-slot:progress>
      <v-progress-linear
        v-if="isLoading"
        absolute
        height="7"
      ></v-progress-linear>
    </template>
  </v-text-field>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'SearchBar',
    emits: ["searchClicked"],
    props: {
      isLoading: false
    },
    data: () => ({
      value: ''
    }),

  }
</script>

<style scoped>

</style>