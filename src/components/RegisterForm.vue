<script setup lang="ts">
import { defineProps } from 'vue';
import { Form } from '../types/Form';

    const props = defineProps({
        form: {
            type: Object as () => Form,
            default: []
        }
    })

</script>
<template>
    <v-form @submit.prevent="props.form.handleSubmit" id="register-form">
        <v-container>
            <v-row v-for="item in props.form.fields">
                <v-col :cols="item.cols">
                    <v-text-field @change="props.form.handleChange" :id="item.id" variant="outlined" :label="item.label" :type="item.type"
                         :v-model:modelValue="item.model" ></v-text-field>
                </v-col>
            </v-row>
            <v-btn color="success" class="mt-2" text="cadastrar" type="submit" block></v-btn>
            <v-btn color="primary" class="mt-2" text="Login" type="submit" block @click="() => {$router.push('/')}"></v-btn>

        </v-container>
    </v-form>
</template>
<style scoped>
    #register-form {
    width: 90%;
    height: 50%;
}

.field {
    width: 100%;
}
</style>