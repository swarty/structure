import Vue from 'vue/dist/vue.esm';

Vue.config.devtools = true;

const vueApp = new Vue({
	// delimiters: ['${', '}'],
  el: '#lal',
  data: {
    message: 'Hello Vue!'
  }
})

console.log(vueApp)