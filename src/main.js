const { createApp } = require('vue');
import App from './App.vue';

const component = createApp(App);

component.provide('ComponentKey', 'Provided from main.js');
component.mount('#app');
console.log(component);
