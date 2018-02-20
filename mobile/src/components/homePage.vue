<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="center">Handball</div>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>
  <v-ons-tabbar swipeable position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex">
  </v-ons-tabbar>

  <v-ons-card style="margin-top: 55px">
    <div class="title">Hoy</div>
    <div class="content">
      <v-ons-list>
        <v-ons-list-item>Item</v-ons-list-item>
        <ItemTeam jugando="true" :partido="partido" :equipoA="equipoA" :equipoB="equipoB"></ItemTeam>
        <ItemTeam :partido="partido" :equipoA="equipoA" :equipoB="equipoB"></ItemTeam>
      </v-ons-list>
    </div>
  </v-ons-card>

</v-ons-page>
</template>

<script>
import ItemTeam from "./itemTeam";

const partidosActivosTab = {
  template: '#home',
  props: ['myProp']
};

const partidosPasadosTab = {
  template: '#settings'
};

export default {
  name: 'home',
  components: {
    ItemTeam
  },
  data() {
    return {
      partido: {
        estado: 'estado',
        fechaInicio: new Date(),
        marcador: {
          golesEquipoA: 0,
          golesEquipoB: 0
        }
      },
      equipoA: {
        nombre: "Equipo A",
        escudoURL: "http://www.clker.com/cliparts/o/B/N/P/d/B/escudo-medieval-vermelho.svg.med.png"
      },
      equipoB: {
        nombre: "Equipo B",
        escudoURL: "http://www.clker.com/cliparts/d/G/Y/W/1/o/escudo-medieval-azul.svg.med.png"
      },

      activeIndex: 0,
      tabs: [
        {
          label: 'Activos',
          page: partidosActivosTab,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "partidosActivosTab"
        },
        {
          label: 'Pasados',
          page: partidosPasadosTab,
          key: "partidosPasdosTab"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.text-center {
  text-align: "center";
}
</style>
