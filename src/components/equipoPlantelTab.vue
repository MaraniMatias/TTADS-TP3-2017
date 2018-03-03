<template>
<v-ons-page>

  <div style="text-align: center; margin: 40px; color: #666" v-if="isLoading">
    <p>
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </p>
  </div>

  <v-ons-list modifier="inset" v-show="!isLoading">
    <v-ons-list-title>Jugadores</v-ons-list-title>
    <v-ons-list-item modifier="longdivider" v-for="(jugador, index) in equipo.jugadores" :key="index">{{jugador.nombre}}</v-ons-list-item>
  </v-ons-list>
  <v-ons-list modifier="inset" v-show="!isLoading">
    <v-ons-list-title>Cuerpo Tecnico</v-ons-list-title>
    <v-ons-list-item modifier="longdivider" v-for="(tecnico, index) in equipo.cuerpoTecnico" :key="index">{{tecnico.nombre}}</v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EquipoPlantelTab',
  props: {
    equipoId: [String]
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('equipo', [
      'equipo',
      'isLoading'
    ])
  },
  methods: {},
  updated() {},
  mounted() {}
};
</script>

<style scoped>
ons-list {
  margin-top: 12px;
}
</style>
