import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import vSelect from "vue-select";
import mitt from 'mitt';
import "vue-select/dist/vue-select.css";
loadFonts()

const app = createApp(App);
const eventBus = mitt();
app.use(router)
app.use(vuetify)
app.provide('eventBus',eventBus);
app.component("v-select3", vSelect);
app.mount("#app");