import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/style.css";
import Toast from "vue-toastification";
import store from "./store";
import "vue-toastification/dist/index.css";
import mitt from "mitt";
const emitter = mitt();

const app = createApp(App);
app.use(store);
app.use(VueAxios, axios);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "top-center",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
};

app.use(Toast, options);