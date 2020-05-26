import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import vSelectPage from "v-selectpage";

Vue.config.productionTip = false;

Vue.use(vSelectPage, {
  // server side data loader
  language: "en",
  dataLoad: function(vue, url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(resp => resolve(resp), resp => reject(resp));
    });
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
