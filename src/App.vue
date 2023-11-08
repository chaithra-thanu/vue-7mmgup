<template>
  <div id="app">
    <div class="user">Hi</div>
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <h1>nameReactive : {{ userReactive.name }}</h1>
    <h1>nameReactive : {{ userReactive.age }}</h1>
    <p>{{ userReactive }}</p>
    <h1>name : {{ user.name }}</h1>
    <p>{{ user }}</p>
    <h2>age: {{ user.age }}</h2> -->

    <!-- <hr />
    <StudyVue /> -->
    <!-- <hr />
    <ReplacingMethods /> -->
    <!-- <hr />
    <MentluCode /> -->
    <hr />
    <ParentComponent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MentluCode from './components/ChaithraStudyVue.vue';
import StudyVue from './components/StudyVue.vue';
import ReplacingMethods from './components/ReplacingMethods.vue';
import ParentComponent from './components/ParentComponent.vue';
import { ref, reactive } from 'vue';
// reactive is explicitly made for objects,
// hence we must pass an object to reactive

export default {
  name: 'App',
  components: {
    HelloWorld,
    StudyVue,
    ReplacingMethods,
    MentluCode,
    ParentComponent,
  },
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
    // console.log('user', user);
    // console.log('userReactive', userReactive);
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3550;
  margin-top: 60px;
}
</style>
