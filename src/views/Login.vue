<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
import {Form} from '../types/Form';
import {useLoginStore} from '../stores/login'
import type { Fields } from '../types/Form';
import Login from '../types/Login';
import { AxiosResponse } from 'axios';
import {useRouter } from 'vue-router';

const loginStore = useLoginStore()
const router = useRouter()

const form: Form = {
    fields: loginStore.fields,
    handleSubmit: async () => {
        const credentialsData: Login = {
            "email" : loginStore.fields[0].model,
            "password" : loginStore.fields[1].model
        }

        const response = await loginStore.login(credentialsData) as AxiosResponse

        if(response?.status !== 200) {
            return alert('Failed Authentication');
        }

        router.push('/home');
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
</style>