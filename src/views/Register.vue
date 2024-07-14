<script setup lang="ts">
import RegisterForm from '../components/Register/RegisterForm.vue';
import { Form } from '../types/Form';
import { useRegisterStore } from '../stores/register';
import Register from '../types/Register';

const registerStore = useRegisterStore()

const registerForm: Form = {
    fields: registerStore.fields,

    handleSubmit: async () => {
        const newUser: Register = {
            name: registerStore.registerData.name,
            email: registerStore.registerData.email,
            password: registerStore.registerData.password
        }
        await registerStore.register(newUser);
    },
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