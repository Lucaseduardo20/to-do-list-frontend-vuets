<script setup lang="ts">
// import { User } from '../models/user';
import LoginForm from '../components/LoginForm.vue';
import {Form} from '../types/Form';
import {useUserStore} from '../stores/auth'
import { ref } from 'vue';

const authStore = useUserStore()

console.log(authStore.user)

const email = ref<string>('');

const form: Form = {
    fields: [
        {
            label: 'E-mail',
            type: 'text',
            id: 'email',
            model: '',
            cols: 12
        },
        {
            label: 'Senha',
            type: 'password',
            id: 'password',
            model: '',
            cols: 12
        }
    ],
    handleSubmit: (value: any) => console.log(value.target[1].value) // tentando pegar o valor dos campos, essa forma talvez não seja boa prática.
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