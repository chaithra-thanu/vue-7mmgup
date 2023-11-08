<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div v-bind:style="{ backgroundColor: 'beige' }">
      <h1 v-bind:style="{ color: 'green' }">Study Vue Component</h1>
    </div>
    <h1>nameReactive : {{ userReactive.name }}</h1>
    <h1>nameNON Reactive : {{ userName }}</h1>
    <h1>nameReactive : {{ userReactive.age }}</h1>
    <p>{{ userReactive }}</p>
    <h1>name : {{ user.name }}</h1>
    <p>{{ user }}</p>
    <h2>age: {{ user.age }}</h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { ref, reactive, isReactive, isRef, toRefs } from 'vue';
// reactive is explicitly made for objects,
// hence we must pass an object to reactive

//toRefs take object and makes its properties as reactive but fails isRef and isReacrtive

export default {
  name: 'StudyVue',

  created() {
    console.log('created');
  },
  setup() {
    // console.log('setUp');
    // const name = ref('kaadpaapu');
    // const age = ref(27);
    // const consoling = ref(() => {
    //   console.log('name ', name.value);
    // });
    const user = ref({
      name: 'kaadpapu',
      age: 27,
    });
    const userReactive = reactive({
      name: 'kaadpapu',
      age: 27,
    });

    const userRefs = toRefs(user);

    // To check if reactive
    console.log('user.name', isRef(userRefs.name));
    console.log('user', isRef(user));
    console.log('userReactive', isReactive(userReactive));
    console.log('userReactive.name', isReactive(userReactive.name));
    // setInterval(() => {
    //   user.value.name = name.value + 'mentlu';
    //   user.value.age = age.value + 1;
    //   // consoling.value;
    // }, 2000);
    setTimeout(() => {
      user.value.name = user.value.name + 'mentlu';
      user.value.age = user.value.age + 1;
      // for reactive we can just use as object drilling, since no wrapper object
      userReactive.name = userReactive.name + ' hi-mentlu';
      userReactive.age = userReactive.age - 1;
      // consoling.value;
    }, 2000);

    return {
      userName: userReactive.name,
      userAge: userReactive.age,
      user,
      userReactive,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
