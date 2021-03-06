import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Auth from "./directives/auth";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Divider,
  Menu,
  Result,
  Form,
  Input,
  Select,
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Divider);
Vue.use(Menu);
Vue.use(Result);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
