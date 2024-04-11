<script setup lang="ts">
import { defineProps } from 'vue';
import Credentials from '../models/user';
import { Form } from '../types/Form';

const props = defineProps({
    credentials: {
        type: Object as () => Credentials,
        default: ''
    },
    form: {
        type: Object as () => Form,
        default: []
    }
})

</script>

<template>
    <v-form @submit.prevent="props.form.handleSubmit" id="form">
        <v-container>
            <v-row v-for="item in props.form.fields">
                <v-col :cols="item.cols">
                    <v-text-field @change="props.form.handleChange" :id="item.id" variant="outlined" :label="item.label" :type="item.type"
                        :modelValue="item.model"></v-text-field>
                </v-col>
            </v-row>
            <v-btn color="success" class="mt-2" text="ENTRAR" type="submit" block></v-btn>
        </v-container>
    </v-form>
</template>

<style scoped>
#form {
    width: 90%;
    height: 50%;
}

.field {
    width: 100%;
}
</style>../stores/login