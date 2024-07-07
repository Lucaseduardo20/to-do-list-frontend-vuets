import { defineStore } from "pinia";
import { Api, baseURL } from "../services/api";
import type { Fields } from "../types/Form";
import Login from "../types/Login";
import { AxiosResponse } from "axios";

export const useLoginStore = defineStore('loginStore', {
    state: () => ({
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
        user: {}
    }),
    actions: {
        async login(credentials: Login) {
            const {email, password} = credentials
            try{
                const response: AxiosResponse = await Api.post('/login', {email, password})
                this.user = response;
                
                return response
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