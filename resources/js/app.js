import {createApp} from 'vue';
import App from './components/App';
import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    routes: routes,// short for `routes: routes`
    history: createWebHistory("/"),
});
const app = createApp(App);
app.use(router);

app.provide('csrf',document.querySelector('meta[name="csrf"]').content);

app.mount('#app');
