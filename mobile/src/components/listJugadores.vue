<template>
<v-ons-page>
  {{myProp}}
  <v-ons-list>
    <v-ons-list>
      <v-ons-lazy-repeat :render-item="renderItem" :length="1000"></v-ons-lazy-repeat>
    </v-ons-list>
  </v-ons-list>
</v-ons-page>
</template>

<script>
export default {
  name: 'ListJugadores',
  props: ['myProp'],
  components: {

  },
  data() {
    return {};
  },
  methods: {
    renderItem: i => i,
  }
};
</script>
