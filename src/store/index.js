import { createStore } from "vuex";
import blog from "./blog.js";
const getDefaultState = () => {
  return {};
};
const store = createStore({
  modules: {
    blog,
  },
  state: {
    ...getDefaultState(),
  },
  mutations: {},
});

export default store;
