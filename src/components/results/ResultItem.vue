<template>
    <v-card>
        <v-card-title>{{result.label}}</v-card-title>
        <v-card-subtitle>{{result.iri}}</v-card-subtitle>        
        <v-card-text v-if="result.description">{{result.description[0]}} </v-card-text>        
    </v-card>
</template>

<script lang='ts'>
import type ResultType from '@/types/ResultType.interface';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'ResultItem',
    props: {
        result: {
            type: Object as PropType<ResultType>,
            required: true,
            label: {
                type: String,
                required: true
            },
            iri: {
                type: String,
                required: true
            },
            description: {
                type: String
            }
        },
    }
});
</script>

<style scoped>
.v-card{
    background-color: #191B1C;
    color: #d8d4cf;
    margin-top: 15px;
    padding-bottom: 10px;
}
.v-card-text {
    color: #d8d4cf;
}
</style>