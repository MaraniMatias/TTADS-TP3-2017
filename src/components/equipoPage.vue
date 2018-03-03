<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$router.back()" icon="ion-ios-arrow-back, material:ion-android-arrow-back"></v-ons-toolbar-button>
    </div>
    <div class="center">{{equipo.nombre || 'Cargando equipo...'}}</div>
    <div class="right">
    </div>
  </v-ons-toolbar>

  <v-ons-tabbar swipeable ripple position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>

</v-ons-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PlantelTab from './equipoPlantelTab';
import FixtureTab from './equipoFixtureTab';

export default {
  name: 'EquipoPage',
  props: {
    id: {
      required: true
    }
  },
  components: {},
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          // Lista de jugador y cuerpo tecnico
          label: 'Plantel',
          page: PlantelTab,
          props: {
            equipoId: this.id
          },
          key: "plantelTab"
        },
        {
          // Lsita Partidos Torneos
          label: 'Fixture',
          page: FixtureTab,
          props: {
            equipoId: this.id
          },
          key: "fixtureTab"
        },
      ]
    };
  },
  computed: {
    ...mapGetters('equipo', [
      'equipo',
      'isLoading'
    ])
  },
  methods: {
    ...mapActions('equipo', [
      'getEquipoByID'
    ])
  },
  updated() {},
  mounted() {
    this.$nextTick(function () {
      this.getEquipoByID(this.id);
    });
  }
};
</script>

<style scoped>
.right {
  text-align: center;
}
</style>
