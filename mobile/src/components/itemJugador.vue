<template>
<v-ons-list-item :key="index">
  #{{ index }}
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemJugadores',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
