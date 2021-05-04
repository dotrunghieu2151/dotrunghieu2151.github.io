import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  localize
} from "vee-validate";

localize('en');


// custom validation modes
export const passiveWhenValid = ({ errors }) => {
  if (errors.length) {
    return {
      on: ['input', 'change']
    };
  }
  return {
    on: []
  };
}

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);