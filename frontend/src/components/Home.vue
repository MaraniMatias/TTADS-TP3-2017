<template lang="pug">
  div
    h1 {{ msg }}
</template>

<script>
import from from './vuetify-form.vue';

export default {
  name: 'home',
  components: {
    'custom-form': from
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    btnClick() {
      console.log("btn");
    },
    submit() {
      console.log("Home");
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
