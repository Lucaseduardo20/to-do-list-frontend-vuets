<script setup lang="ts">
import LoginForm from '../components/Login/LoginForm.vue';
import {Form} from '../types/Form';
import {useLoginStore} from '../stores/login'
import { AxiosResponse } from 'axios';
import {useRouter } from 'vue-router';
import type {Fields} from '../types/Form'
import Login from '../types/Login'

const loginStore = useLoginStore()
const router = useRouter()

const form: Form = {
    fields: loginStore.fields as Fields[],
    handleSubmit: async () => {
        const loginData: Login  = {
            email: loginStore.loginData.email,
            password: loginStore.loginData.password
        }
        const response = await loginStore.login(loginData) as AxiosResponse

        if(response?.status !== 200) {
            return alert('Failed Authentication');
        }

        router.push('/home');
    },
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