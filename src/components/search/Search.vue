<template>
   <v-row>
       <v-col class="mb-4">
          <v-container fluid>
            <SearchBar :isLoading="isLoading" @searchClicked="searchDB"/>
            <div v-if="data.response">
              <div class="results" v-if="data.response.numFound > 0">
                <h1>Results ({{data.response.numFound}}):</h1>
                <ResultItem v-for="result in data.response.docs" :key="result.id" :result="result"/>
                <ResultsNav @changePage="changePage" :page="page" :numResults="data.response.numFound"/>
              </div>
              <div v-else>
                <h1>No Results Found For: "{{query}}"</h1>
              </div>
            </div>
          </v-container>
        </v-col>
    </v-row> 
</template>

<script lang='ts'>
import { defineComponent } from 'vue' 
import ResultItem from '../results/ResultItem.vue'
import ResultsNav from '../results/ResultsNav.vue'
import SearchBar from './SearchBar.vue'
import { queryDB } from '@/services/API'
import type ResultsTypes from '@/types/ResultsTypes.interface'


export default defineComponent({
    name: 'Search',
    components: {
        ResultItem,
        ResultsNav,
        SearchBar,
    },
    data: () => {
        return {
            data: {} as ResultsTypes,
            page: 0 as number,
            resultsPerPage: 10 as number,
            query: '',
            isLoading: false
        }
    },
    methods: {
        async searchDB(newQuery: string): Promise<void> {
            this.isLoading = true; //Starts the loading bar animation
            this.query = newQuery;
            const value = await queryDB((this.page * 10), this.resultsPerPage, this.query);
            this.data = value;
            this.isLoading = false; //Ends the loading bar animation
        },        
        async changePage (newPage: number): Promise<void> {
            this.page = newPage;
            const value = await queryDB((this.page * 10), this.resultsPerPage, this.query);
            this.data = value;
        }
    }
    });   
</script>

<style scoped>

</style>