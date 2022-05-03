<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Ontology Lookup
            <v-container fluid>
              <v-text-field
                v-model="query"
                color="cyan darken"
                label="Search"
                placeholder="Start typing..."
                :loading = "isLoading"
                @keyup.enter="searchDB"
              >
                <template v-slot:progress>
                  <v-progress-linear
                    v-if="isLoading"
                    absolute
                    height="7"
                  ></v-progress-linear>
                </template>
              </v-text-field>
            </v-container>
          <v-btn elevation="2" outlined @click="searchDB">Search</v-btn>
        </h1>
      </v-col>
    </v-row>

    <v-row>
       <v-col class="mb-4">
          <v-container fluid>
            <div v-if="data.response">
              <div class="results" v-if="data.response.numFound > 0">
                <h1>Results:</h1>
                <ResultItem v-for="result in data.response.docs" :key="result.id" :result="result"/>               
                <div class="pageNav">
                  <v-btn class="mx-2" icon dark color="indigo" :disabled="showPreviousButton" @click="previousPage">
                    <v-icon dark> mdi-minus </v-icon>
                  </v-btn>
                  <h5> Page: {{page}}/{{totalPages}}</h5>         
                  <v-btn class="mx-2" icon dark color="indigo" :disabled="showNextButton" @click="nextPage">
                    <v-icon dark> mdi-plus </v-icon>
                  </v-btn>
                  </div>
                </div>
              <div v-else>
                <h1>No Results Found For: "{{query}}"</h1>
              </div>
            </div>
          </v-container>
        </v-col>
      </v-row>
  </v-container>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue'
  import { queryDB } from '../services/API'
  import type ResultsTypes from '../types/ResultsTypes.interface'
  import ResultItem from './ResultItem.vue'
  
  export default defineComponent({
    name: 'Search',
    components: {
      ResultItem
  },        
  data: () => {
    return {
      data: {} as ResultsTypes,
      query: '' as string,
      page: 1 as number,
      resultsPerPage: 10 as number,
      isLoading: false as boolean,
    }
  },
  methods: {
    async searchDB(): Promise<void> {
      this.isLoading = true; //Starts the loading bar animation
      const value = await queryDB((this.page * 10), this.resultsPerPage, this.query);
      console.log("Test", (this.page * 10), this.resultsPerPage, this.query)
      this.data = value;
      console.log("results", value)
      this.isLoading = false; //Ends the loading bar animation
    },
    async nextPage(): Promise<void> {
      this.page++;
      await this.searchDB();
    },
    async previousPage(): Promise<void> {
      this.page--;
      await this.searchDB();
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.response.numFound / 10)
    },
    showNextButton() {
      return !(this.data.response.numFound > (this.page * this.resultsPerPage) + 1)
    },
    showPreviousButton() {
      return !(this.page > 1)
    }
  }
});
</script>

<style scoped>
.pageNav {
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
}
.pageNav h5{
  vertical-align: center;
  text-align: center;
}
</style>