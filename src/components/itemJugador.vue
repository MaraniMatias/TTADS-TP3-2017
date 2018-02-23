<template>
<v-ons-list-item :key="index" tappable @click="goToProfile()">
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
  methods: {
    goToProfile() {
      this.$router.push({ name: 'jugador', params: { id: '12345' } });
    }
  }
};
</script>

<style scoped>

</style>
