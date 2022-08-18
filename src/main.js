import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './cookie'
import {getCookie, setCookie} from "./cookie";

Vue.config.productionTip = false

var removed = false;
document.addEventListener("scroll", () => {
  if (removed)
    return
  removed = true;
  document.getElementById("arrow").remove();
})

if (getCookie("lang") === "")
  setCookie("lang", "eng", 1000);

new Vue({
  render: h => h(App),
}).$mount('#app')
