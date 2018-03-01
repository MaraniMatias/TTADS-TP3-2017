<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$router.back()" icon="ion-ios-arrow-back, material:ion-android-arrow-back"></v-ons-toolbar-button>
    </div>
    <div class="center">
      {{nombre}}
    </div>
    <div class="right">
      <img src="http://www.clker.com/cliparts/d/G/Y/W/1/o/escudo-medieval-azul.svg.med.png" alt="Escudo del equipo" class="shield">
    </div>
  </v-ons-toolbar>

  <v-ons-tabbar swipeable ripple position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex">
  </v-ons-tabbar>

</v-ons-page>
</template>

<script>
import ListJugadores from './listJugadores';

export default {
  name: 'EquipoPage',
  components: {},
  // Usar parametro, pasa id y que este controlador pida los datos
  /*
  escudoURL: {
  jugadores: {
  cuerpoTecnico: {
  partidos: {
  */
  data() {
    return {
      nombre: 'Equipo',
      activeIndex: 0,
      tabs: [
        {
          label: 'Jugadores',
          page: ListJugadores,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "jugadoresTab"
        },
        {
          label: 'Partidos',
          page: ListJugadores,
          key: "partidosTab"
        },
        {
          label: 'Cuerpo Tecnico',
          page: ListJugadores,
          key: "cuerpoTecnicoTab"
        },
        {
          label: 'Torneos',
          page: ListJugadores,
          key: "torneosTab"
        }
      ]
    };
  },
  methods: {
    goToEquipoPage(equipo) {
      this.$router.push({ name: 'equipo', params: { id: equipo.id } });
    },
    goToPartidoPage() {
      this.$router.push({ name: 'partido', params: { id: this.partido.id } });
    }
  }
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
