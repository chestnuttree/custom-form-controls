import Vue from "vue";
import Router from "vue-router";
import CustomParams from "@/components/custom-params";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "CustomParams",
      component: CustomParams
    }
  ]
});
