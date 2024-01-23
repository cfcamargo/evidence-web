// plugins/click-outside.ts
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el: any, binding) {
      el.clickOutsideEvent = function(event: MouseEvent) {
        if (!(el === event.target || el.contains(event.target as Node)) && binding.value) {
          binding.value();
        }
      };
      document.addEventListener('mousedown', el.clickOutsideEvent);
    },
    beforeUnmount(el: any) {
      document.removeEventListener('mousedown', el.clickOutsideEvent);
    },
  });
});