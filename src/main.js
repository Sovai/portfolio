import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import _ from "lodash";

import "./assets/styles/index.css";
import mixins from "./mixins";
import { loadAllPlugins } from "./plugins";

const app = createApp(App);
app.config.devtools = true;

// global properties
app.config.globalProperties._ = _;

// global mixins
app.mixin(mixins);

// global plugins
loadAllPlugins(app);

app.use(store).use(router).mount("#app");
