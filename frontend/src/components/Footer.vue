<template lang="pug">
  v-footer(app)
    span &copy; 2017 {{ msg }}
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
