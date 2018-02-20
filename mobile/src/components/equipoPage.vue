<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">
      {{equipo.nombre}
    </div>
    <div class="right">
      <img src="http://www.clker.com/cliparts/d/G/Y/W/1/o/escudo-medieval-azul.svg.med.png" alt="Escudo del equipo" class="shield">
    </div>
  </v-ons-toolbar>
  <v-ons-tabbar swipeable position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>


</v-ons-page>
</template>

<script>
const jugadoresTab = {
  template: '#jugadoresTab'
};

const cuerpoTecnicoTab = {
  template: '#cuerpoTecnicoTab'
};

const partidosTab = {
  template: '#partidosTab'
};

export default {
  name: 'EquipoPage',
  // Usar parametro, pasa id y que este controlador pida los datos
  /*
  nombre: {
  escudoURL: {
  jugadores: {
  cuerpoTecnico: {
  partidos: {
  */
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          label: 'Jugadores',
          page: jugadoresTab,
          key: "jugadoresTab"
        },
        {
          label: 'Partidos',
          page: partidosTab,
          key: "partidosTab"
        },
        {
          label: 'Cuerpo Tecnico',
          page: cuerpoTecnicoTab,
          key: "cuerpoTecnicoTab"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.shield {
  /* height: inherit; */
  height: auto;
  padding-top: 8px;
  width: 36px;
}

.right {
  text-align: center;
}
</style>
