import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router);
}) 

const vuetify = createVuetify({
    components,
    directives,
})
const app = createApp(App);

app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .mount('#app');
