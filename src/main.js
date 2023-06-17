import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

import App from "./App.vue";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

extend("required", {
  ...required,
  message: "This field is required",
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
