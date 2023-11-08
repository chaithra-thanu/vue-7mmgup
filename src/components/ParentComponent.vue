<template>
  <h1>Hi I am Parent Component</h1>
  <!-- <div>
    <h6>{{ initialArray }}</h6>
    <button @click="changeArray">change Array</button>
  </div> -->
  <input
    type="text"
    placeholder="First Name 2 way"
    v-model="firstNameRef.name"
  />
  <input
    type="text"
    placeholder="middle name ref element"
    ref="middleNameRefElement"
  />
  <button @click="setMiddleNameRefElement">Set Middle Name Ref Element</button>
  <input type="text" placeHolder="lastName" @input="setLastNameReactive" />
  <h1>{{ fullName }}</h1>
  <hr />
  <child-data
    class="test"
    v-bind:firstName="firstNameRef.name"
    :middleName="middleName"
    :lastName="lastNameReactive"
  />
</template>
<script>
import { ref, watch, reactive, computed, toRef, provide } from 'vue';
import Child from './ChildComponent.vue';
export default {
  name: 'ParentComponent',
  components: { 'child-data': Child },

  // Provide in Options API
  // provide() {
  //   return { name: this.firstName };
  // },

  setup() {
    // just to check watchers
    // const initialArray = ref(['one', 'two']);

    // const changeArray = () => (initialArray.value = ['three', 'four']);

    // watch(initialArray, (newValues, oldValues) => {
    //   console.log('oldValue', oldValues, 'newValue', newValues);
    // });
    //-----------------------------------------//
    // firstName with ref()
    const firstNameRef = ref({
      name: 'fn',
      type: 'ref',
    });
    watch(firstNameRef.value, (newValues, oldValues) => {
      console.log('oldValue', oldValues, 'newValue', newValues);
    });

    //-----------------------------------------//
    // middleName with Template Ref
    const middleNameRefElement = ref(null);
    const middleName = ref({ name: '', type: 'TemplateRef' });
    const setMiddleNameRefElement = () => {
      console.log(
        'middleNameRefElement.==>',
        middleNameRefElement.value,
        'middleNameRefElement.value.value==>',
        middleNameRefElement.value.value
      );
      middleName.value.name = middleNameRefElement.value.value;
    };

    //-----------------------------------------//
    // lastName with reactive()
    const lastNameReactive = reactive({
      name: 'lnrr',
      type: 'reactiveRef',
    });
    function setLastNameReactive(event) {
      lastNameReactive.name = event.target.value;
    }

    const fullName = computed(() => {
      console.log('fullName compution called');
      return (
        firstNameRef.value.name +
        ' ' +
        middleName.value.name +
        ' ' +
        lastNameReactive.name
      );
    });

    watch([lastNameReactive, firstNameRef.value], (newValues, oldValues) => {
      console.log(
        'oldValue Reactive',
        oldValues,
        'newValue Reactive',
        newValues
      );
    });
    // provide a value by providing two arguments to provide ==> firstone is key of our choice, second is actual value we wanna provide
    provide('name', firstNameRef);

    // since ref is passed the place where we inject would automatically update the changes

    // to achieve reactivity pass ref as a whole to provide and while returning from setup, while sending as props we can send as a property of ref object

    return {
      // initialArray,
      // changeArray,
      firstNameRef,
      middleNameRefElement,
      setMiddleNameRefElement,
      middleName,
      lastNameReactive,
      setLastNameReactive,
      fullName,
    };
  },
};
</script>
<style></style>
