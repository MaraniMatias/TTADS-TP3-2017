<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$router.back()" icon="ion-ios-arrow-back, material:ion-android-arrow-back"></v-ons-toolbar-button>
    </div>
    <div class="center">{{equipo.nombre}}</div>
    <div class="right">
      <img :src="equipo.escudoURL" class="shield" />
    </div>
  </v-ons-toolbar>

  <v-ons-tabbar swipeable ripple position="auto" :tabs="tabs" :visible="true" :index.sync="activeIndex">
  </v-ons-tabbar>

</v-ons-page>
</template>

<script>
import PlantelTab from './equipoPlantelTab';
import FixtureTab from './equipoFixtureTab';

export default {
  name: 'EquipoPage',
  components: {},
  data() {
    return {
      equipo: {
        nombre: 'Detalles del equipo detalles del equipo',
        escudoURL: 'http://www.clker.com/cliparts/d/G/Y/W/1/o/escudo-medieval-azul.svg.med.png',
      },


      activeIndex: 0,
      tabs: [
        {
          // Lista de jugador y cuerpo tecnico
          label: 'Plantel',
          page: PlantelTab,
          /*
          props: {
            myProp: 'This is a page prop!'
          },
          */
          key: "plantelTab"
        },
        {
          // Lsita Partidos Torneos
          label: 'Fixture',
          page: FixtureTab,
          key: "fixtureTab"
        },
      ]
    };
  },
  computed: {},
  methods: {
    goToEquipoPage(equipo) {
      this.$router.push({ name: 'equipo', params: { id: equipo.id } });
    }
  },
  updated() {},
  mounted() {}
};
</script>

<style scoped>
.shield {
  /* height: inherit; */
  height: auto;
  min-width: 36px;
  max-height: 46px;
  padding-top: 8px;
  width: 36px;
}

.right {
  text-align: center;
}
</style>
