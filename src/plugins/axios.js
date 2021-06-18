import Vue from "vue";
import Axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://formulario-giovane-default-rtdb.firebaseio.com/"
    });
  }
});
