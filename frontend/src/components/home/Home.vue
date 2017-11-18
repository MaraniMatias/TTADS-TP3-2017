<template lang="pug">
  div
    h1 Welcome to Your Vue.js App
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap)
        v-flex(xs8)
          //v-card(dark color='secondary')
            v-card-text.px-0 8
          partido-list

        v-flex(xs4)
          //v-card
            v-card-text.px-0 4
          partido-panel
</template>

<script>
import panel from './partidoPanel.vue';
import list from './partidoList.vue';

export default {
  name: 'home',
  components: {
    'partido-panel': panel,
    'partido-list': list
  },
  data() {
    return {}
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

</style>
