<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div v-bind:style="{ backgroundColor: 'beige' }">
      <h1 v-bind:style="{ color: 'green' }">Replacing Method Component</h1>
    </div>
    <h1>nameReactive : {{ userReactive.name }}</h1>
    <h1>nameNON Reactive : {{ userName }}</h1>
    <h1>nameReactive : {{ userReactive.age }}</h1>
    <p>{{ userReactive }}</p>
    <h1>name : {{ user.name }}</h1>
    <p>{{ user }}</p>
    <h2>age: {{ user.age }}</h2>
    <!-- <button @click="user.age = 33">Change Age</button> -->
    <button @click="setNewAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" /> -->
      <input type="text" placeholder="First Name 2 way" v-model="firstName" />
      <!-- <input type="text" placeholder="Last Name" @input="setLastName($event)" /> -->
      <input type="text" placeholder="First Name 2 way" v-model="lastName" />
      <h1>Full Name : {{ fullName }}</h1>
      <!-- <input v-bind:value="{{fullName}}" /> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { ref, reactive, isReactive, isRef, toRefs, computed, watch } from 'vue';
// reactive is explicitly made for objects,
// hence we must pass an object to reactive

//toRefs take object and makes its properties as reactive but fails isRef

// v-model is used for two way binding ===> can accepts refs and reactive values

export default {
  name: 'ReplacingMethods',

  created() {
    console.log(' Replacing Mt Comp created');
  },
  setup() {
    // console.log(' Replacing Mt Comp setUp');
    // const name = ref('kaadpaapu');
    // const age = ref(27);
    // const consoling = ref(() => {
    //   console.log(' Replacing Mt Comp name ', name.value);
    // });
    const firstName = ref('');
    const lastName = ref('');

    watch(firstName.value, function (newValue, oldValue) {
      console.log('old age', oldValue);
      console.log('new age', newValue);
    });
    const user = ref({
      name: 'kaadpapu',
      age: 27,
    });
    const userReactive = reactive({
      name: 'kaadpapu',
      age: 27,
    });

    watch(user.value, function (newValue, oldValue) {
      console.log('old user value', oldValue);
      console.log('new user value', newValue);
    });

    // watch(userReactive, function (newValue, oldValue) {
    //   console.log('userReactive old value', oldValue);
    //   console.log('userReactive  new value', newValue);
    // });

    // watch([user.age, firstName], function (newValue, oldValue) {
    //   console.log('old value', oldValue[0]);
    //   console.log('new value', newValue[0]);
    //   console.log('old value', newValue[1]);
    //   console.log('new value', newValue[1]);
    // });

    // const userRefs = toRefs(user);

    // To check if reactive
    // console.log(' Replacing Mt Comp user.name', isRef(userRefs.name));
    console.log(' Replacing Mt Comp user', isRef(user));
    console.log(' Replacing Mt Comp userReactive', isReactive(userReactive));
    console.log(
      ' Replacing Mt Comp userReactive.name',
      isReactive(userReactive.name)
    );
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

    function setNewAge() {
      userReactive.age = 32;
    }
    function setNewAge() {
      user.value.age = 32;
    }

    // here using two-way binding we can avoid functions used to set ref value
    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    // computed function
    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    //watch function
    //watch(dependency, function to call)

    // Note: computed value is also a Ref but it is a Ref which is read only

    // function setNewAge() {
    //   userReactive.age = 32;
    // }

    return {
      userName: userReactive.name,
      userAge: userReactive.age,
      user,
      userReactive,
      setAge: setNewAge,
      // setFirstName,
      // setLastName,
      fullName,
      firstName,
      lastName,
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
  background-color: #0f0f2f;
}
</style>
