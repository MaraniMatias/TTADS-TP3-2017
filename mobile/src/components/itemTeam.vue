<template>
<v-ons-list-item v-if="jugando">
  <v-ons-list-item>
    <div class="left">
      <img class="list-item__thumbnail" :src="equipoA.escudoURL"> {{equipoA.nombre}}
    </div>
    <div class="center">
      <p class="marcador"> {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}} </p>
      <p class="tiempo">{{partido.fechaInicio | morph-date('MMM DD, YYYY')}}</p>
    </div>
    <div class="right">
      <img class="list-item__thumbnail" :src="equipoB.escudoURL"> {{equipoB.nombre}}
    </div>
  </v-ons-list-item>
</v-ons-list-item>
<v-ons-list-item v-else>
  <v-ons-list-item>
    <div class="left">
      {{equipoA.nombre}}
    </div>
    <div class="center">
      <p class="marcador"> {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}} </p>
    </div>
    <div class="right">
      {{equipoB.nombre}}
    </div>
  </v-ons-list-item>
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
