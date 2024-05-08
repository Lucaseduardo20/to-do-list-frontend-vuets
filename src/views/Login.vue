<script setup lang="ts">
// import { User } from '../models/user';
import LoginForm from '../components/LoginForm.vue';
import {Form} from '../types/Form';
import {useLoginStore} from '../stores/login'
import Credentials from '../models/user';
import type { Fields } from '../types/Form';
// import { ref } from 'vue';

const loginStore = useLoginStore()

// const email = ref<string>('');

const form: Form = {
    fields: loginStore.fields,
    handleSubmit: async () => {
        const credentialsData: Credentials = {
            "email" : loginStore.fields[0].model,
            "password" : loginStore.fields[1].model
        }

        await loginStore.login(credentialsData)
    },

    handleChange: (value: Event) => {
    const target = value.target as HTMLInputElement
    const updatedFields: Fields[] = loginStore.fields.map((field: Fields) => {
        if(field.id === target.id) {
           return {
            ...field,
            model: target.value
           }
        } else {
            return field
        }
    });
    loginStore.setFields(updatedFields)
}
}



</script>

<template>
    <section id="login-container">
        <h2>FAÇA LOGIN PARA ACESSAR O SISTEMA</h2>
        <LoginForm :form="form"></LoginForm>
    </section>
</template>

<style scoped>
#login-container {
    width: 400px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>../stores/login