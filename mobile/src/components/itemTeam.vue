<template>
<v-ons-list-item v-if="jugando">
  Juganddo
</v-ons-list-item>
<v-ons-list-item v-else>
  Pasado
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemTeam',
  props: {
    // Predeterminado false, cambia la forma en que se muestra la informacion.
    jugando: {
      type: Boolean,
      default: false
    },
    // Tiempo de juego
    tiempo: {
      type: String,
      default: '00:00'
    },
    partido: {
      required: true
    },
    // Datos de los equipos, nombre, goles
    equipoA: {
      required: true,
      // Podemos usarlo para verificcar los datos minimos.
      /* validator: function (value) {
        return typeof value !== 'undefined';
      } */
    },
    equipoB: {
      required: true,
      // Podemos usarlo para verificcar los datos minimos.
      /* validator: function (value) {
        return typeof value !== 'undefined';
      } */
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
