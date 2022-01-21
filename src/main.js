import Vue from 'vue'
import App from './App.vue'
import './index.css'

Vue.config.productionTip = false

var removed = false;
document.addEventListener("scroll", () => {
  if (removed)
    return
  removed = true;
  document.getElementById("arrow").remove();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
