import axios from "axios";
import VueAxios from "vue-axios";
export default function loadComponent(app) {
  app.use(VueAxios, axios);
}
