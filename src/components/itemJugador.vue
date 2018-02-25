<template>
<v-ons-list-item tappable modifier="longdivider" @click="goToProfile()">
  <div class="center">
    {{jugador.apellido +' '+ jugador.nombre}}
  </div>
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
