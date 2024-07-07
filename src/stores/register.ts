import { defineStore } from "pinia";
import { Api, baseURL } from "../services/api";
import type { Fields } from "../types/Form";
import Register from "../types/Register";
import { useRoute, useRouter } from "vue-router";

export const useRegisterStore = defineStore('registerStore', {
    state: () => ({
        fields: [
            {
                label: 'Nome',
                type: 'text',
                id: 'nome',
                model: '',
                cols: 12
            },
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
        user: {}
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
           this.fields = payload 
        },

        redirect(route: string) {
            const router = useRouter();
            router.push(route)
        }
    }
});