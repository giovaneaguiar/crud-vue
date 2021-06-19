import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://formulario-giovane-default-rtdb.firebaseio.com/",
      headers: {
        //header global.
        Authorization: "abc123"
        //qualquer requisição que acontecer, o authorization
        //estará presente.
      }
    });
  }
});
