<template>
  <h1>Hi its Child Component</h1>
  <h2>{{ userName }}</h2>
  <h3>Using provide/inject: {{ name.name }}</h3>
  <h4>{{ ComponentKey }}</h4>
</template>
<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  name: 'Child',
  // props by default are reactive
  props: ['firstName', 'middleName', 'lastName'],
  // using option API
  // computed: {
  //   userName() {
  //     return (
  //       this.firstName.name +
  //       ' ' +
  //       this.middleName.name +
  //       ' ' +
  //       this.lastName.name
  //     );
  //   },
  // },

  // inject option
  inject: ['name', 'ComponentKey'],

  // setup accepts two arguments first is props and the latter is context

  setup(property, context) {
    //Lifecycle hooks
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    // value accessed using inject
    const firstName = inject('firstName');

    // but the accessed value cannot be changed in the injected component, this would work but very unpredictable

    // Eg firstName.value='new value'
    const userName = computed(() => {
      return (
        // this.firstName.name would give undefined
        property.firstName +
        ' ' +
        property.middleName.name +
        ' ' +
        property.lastName.name
      );
    });
    console.log('hi its me props', property);

    // context.emit('save-data',1) instead of this.$emit('save-data',1)
    console.log(context);

    // Option to API
    return { userName, firstName };
  },
};
</script>
<style></style>
