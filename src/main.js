import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSwing from 'vue-swing'
import store from "@/store";

createApp(App).use(router).use(store).component('vue-swing', VueSwing).mount("#app");
