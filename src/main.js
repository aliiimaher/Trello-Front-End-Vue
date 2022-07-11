import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
// import LogIn from "./views/LogIn.vue"
import "../node_modules/primeflex/primeflex.css"
import "primevue/resources/themes/saga-blue/theme.css" //theme
import "primevue/resources/primevue.min.css" //core css
import "primeicons/primeicons.css" //icons



const app = createApp(App);
app.use(PrimeVue);
app.use(router).mount('#app')
