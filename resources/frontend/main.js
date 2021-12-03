import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./views"
import "./components"

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
