import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routers";
import echarts from "./echarts";

import "./styles/index.css";
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(router).mount("#app");
