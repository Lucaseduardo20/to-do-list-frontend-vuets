<script setup lang="ts">
import { defineProps } from 'vue';
import Credentials from '../models/user';

const props = defineProps({
    credentials: {
        type: Object as () => Credentials,
        default: ''
    }
})

</script>

<template>
    <v-form id="form">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field variant="outlined" label="E-mail" :modelValue="props.credentials.email" ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<style scoped>
    #form { 
        border: 2px solid red;
        width: 90%;
        height: 50%;
    }
    
</style>