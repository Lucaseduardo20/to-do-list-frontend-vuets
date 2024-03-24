<script setup lang="ts">
// import { User } from '../models/user';
import LoginForm from '../components/LoginForm.vue';

// const props = defineProps({
// })

</script>

<template>
    <section id="login-container">
        <h2>FAÇA LOGIN PARA ACESSAR O SISTEMA</h2>
        <LoginForm></LoginForm>
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