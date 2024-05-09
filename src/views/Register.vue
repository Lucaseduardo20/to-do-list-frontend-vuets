<script setup lang="ts">
import RegisterForm from '../components/RegisterForm.vue';
import { Form } from '../types/Form';
import { useRegisterStore } from '../stores/register';

const registerStore = useRegisterStore()

const registerForm: Form = {
    fields: registerStore.fields
}


</script>
<template>
    <section id="register-container">
        <h2>CADASTRAR-SE</h2>
        <RegisterForm :form="registerForm"></RegisterForm>
    </section>
</template>
<style>
#register-container {
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>