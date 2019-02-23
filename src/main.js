import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router/index'
import NumericInput from "./components/editor/numeric.vue";
import TextInput from "./components/editor/text.vue";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

Vue.component('numeric-input', NumericInput);
Vue.component('text-input', TextInput);

//Plugin will be more usefull, think about that
Vue.filter('readMore', function (value, length) {
  return "..." + value.substring(0, length);
});

//We can write a custom directives like v-if, v-model
//we can use like v-val
//https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments
Vue.directive('val', {
  bind: function () {
  },
  insert: function () {
  },
  update: function () {
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
