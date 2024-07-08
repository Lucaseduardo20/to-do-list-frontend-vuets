<script setup lang="ts">
import RegisterForm from '../components/Register/RegisterForm.vue';
import { Fields, Form } from '../types/Form';
import { useRegisterStore } from '../stores/register';
import Register from '../types/Register';

const registerStore = useRegisterStore()

const registerForm: Form = {
    fields: registerStore.fields,

    handleSubmit: async () => {
        const registerData: Register = {
            'name': registerStore.fields[0].model,
            'email': registerStore.fields[1].model,
            'password': registerForm.fields[2].model
        };

        await registerStore.register(registerData);
    },

    handleChange: (value: Event) => {
        console.log(value);
    const target = value.target as HTMLInputElement
    const updatedFields: Fields[] = registerStore.fields.map((field: Fields) => {
        if(field.id === target.id) {
           return {
            ...field,
            model: target.value
           }
        } else {
            return field
        }
    });
    registerStore.setFields(updatedFields);
    }
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