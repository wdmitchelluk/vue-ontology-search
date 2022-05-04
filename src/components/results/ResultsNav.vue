<template>
    <div class="pageNav">
        <v-btn class="mx-2" icon dark color="indigo" :disabled="showPreviousButton" @click="previousPage">
        <v-icon dark> mdi-minus </v-icon>
        </v-btn>
        <h5> Page: {{page}}/{{totalPages}}</h5>         
        <v-btn class="mx-2" icon dark color="indigo" :disabled="showNextButton" @click="nextPage">
        <v-icon dark> mdi-plus </v-icon>
        </v-btn>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue' 


export default defineComponent({
    name: 'ResultNav',
    props: {
        numResults: {
            type: Number,
            required: true
        }
    },
    data: () => {
        return {
            resultsPerPage: 10,
            page: 1
        }
    },
    watch: {
        page() {
            this.$emit('changePage', this.page)
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.numResults / 10)
        },
        showNextButton() {
            return !(this.numResults > (this.page * this.resultsPerPage) + 1)
        },
        showPreviousButton() {
            return !(this.page > 1)
        }
    },
    methods: {
        nextPage () {
            this.page++
        },
        previousPage () {
            this.page--
        }
    }
});
</script>

<style scoped>
.pageNav {
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.pageNav h5{
  vertical-align: center;
  text-align: center;
}
</style>