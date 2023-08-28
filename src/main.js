import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './cookie'
import {getCookie, setCookie} from "./cookie";
import('preline')

var removed = false;
document.addEventListener("scroll", () => {
    if (removed)
        return
    removed = true;
    document.getElementById("arrow").remove();
})

if (getCookie("lang") === "")
    setCookie("lang", "eng", 1000);

const app = createApp(App)

app.use(router)

app.mount('#app')

document.title = 'Portfolio | Florent Baris'