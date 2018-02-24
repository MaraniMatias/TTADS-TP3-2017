<template>
<v-ons-list-item @click="goToProfile()">
  {{jugador.apellido +' '+ jugador.nombre}}
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemJugador',
  props: {
    jugador: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    goToProfile() {
      this.$router.push({ name: 'jugador', params: { id: this.jugador._id } });
    }
  }
};
</script>

<style scoped>

</style>
