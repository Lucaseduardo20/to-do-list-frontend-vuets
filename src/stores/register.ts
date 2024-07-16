import { defineStore } from "pinia";
import { Api } from "../services/api";
import type { Fields } from "../types/Form";
import Register from "../types/Register";
import {useRouter } from "vue-router";

export const useRegisterStore = defineStore('registerStore', {
    state: () => ({
        fields: [
            {
                label: 'Nome',
                type: 'text',
                id: 'nome',
                model: 'name',
                cols: 12
            },
            {
                label: 'E-mail',
                type: 'text',
                id: 'email',
                model: 'email',
                cols: 12
            },
            {
                label: 'Senha',
                type: 'password',
                id: 'password',
                model: 'password',
                cols: 12
            }
        ],
        registerData: {
            name: '',
            email: '',
            password: ''
        } as Record<string, string>
    }),
    actions: {
        async register(registerData: Register) {
            const {name, email, password} = registerData
            try{
                const response = Api.post('/register', {name, email, password})

                return response;
            }
            catch (err) {
                return err;
            }
        },

        setFields(payload: Fields[]) {
            // console.log(payload);
           this.fields = payload 
        },

        redirect(route: string) {
            const router = useRouter();
            router.push(route)
        }
    }
});