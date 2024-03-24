<script setup lang="ts">
// import { User } from '../models/user';
import LoginForm from '../components/LoginForm.vue';
import {Form} from '../types/Form';

const form: Form = {
    fields: [
        {
            label: 'E-mail',
            type: 'text',
            id: 'email',
            model: 'teste',
            cols: 12
        },
        {
            label: 'Senha',
            type: 'password',
            id: 'password',
            model: 'teste',
            cols: 12
        }
    ],
    handleSubmit: () => {console.log('bateu')}
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
    border: 10px solid black;
    width: 400px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>