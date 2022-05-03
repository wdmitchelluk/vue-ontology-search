<template>
  <v-container fluid>
    <v-text-field
      v-model="value"
      color="cyan darken"
      label="Search"
      placeholder="Start typing..."
      :loading = "isLoading"
    >
      <template v-slot:progress>
        <v-progress-linear
          v-if="isLoading"
          :value="progress"
          :color="color"
          absolute
          height="7"
        ></v-progress-linear>
      </template>
    </v-text-field>
  </v-container>
</template>

<script lang='ts'>
  export default {
    data: () => ({
      value: '' as string,
      isLoading: false as boolean,
    }),
    computed: {
      progress (): number {
        return Math.min(100, this.value.length * 10)
      },
      color (): string {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      },
    },
  }
</script>

<style scoped>

</style>