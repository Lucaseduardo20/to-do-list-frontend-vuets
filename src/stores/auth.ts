import { defineStore } from "pinia";
import { Api, baseURL } from "../services/api";


export const useUserStore = defineStore('authStore', {
    state: () => ({
        user: {}
    }),
    actions: {
        async login(email: string, password: string) {
            try{
                const response = Api.post(baseURL, {email, password})
                console.log('response :' , response)
                this.user = response;
            }
            catch (err) {
                console.log(err);
            }
        }
    }
});