import { defineStore } from "pinia";
import { Api, baseURL } from "../services/api";
import type { Fields } from "../types/Form";
import type Credentials from "../models/user";


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
        async login(credentials: Credentials) {
            const {email, password} = credentials
            try{
                const response = Api.post('/login', {email, password})
                this.user = response;
            }
            catch (err) {
                return err;
            }
        },

        setFields(payload: Fields[]) {
           this.fields = payload 
        }
    }
});