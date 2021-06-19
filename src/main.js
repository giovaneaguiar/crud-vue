import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";
import "./plugins/axios";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

Vue.prototype.$http.interceptors.request.use(
  //interceptando requisições
  config => {
    console.log(config.method);
    //if(config.method == 'post'){
    //config.method == 'put'
    //  }
    return config;
  },
  error => Promise.reject(error)
);

Vue.prototype.$http.interceptors.response.use(
  res => {
    //interceptando respostas
    // const array = [];
    // for (let chave in res.data) {
    //   array.push({ id: chave, ...res.data[chave] });
    // }
    // res.data = array;
    return res;
  },
  error => Promise.reject(error)
);
