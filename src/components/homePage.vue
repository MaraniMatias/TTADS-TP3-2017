<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Fixture</div>
    <div class="right">
      <v-ons-toolbar-button @click="actionSheetVisible = true" icon="ion-funnel, material:ion-android-funnel"></v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>

  <v-ons-tabbar swipeable tappable position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>

  <v-ons-modal :visible="actionSheetVisible">
    <v-ons-list modifier="inset">
      <v-ons-list-header>Torneos a listar</v-ons-list-header>

      <v-ons-list-item tappable v-for="(item, $index) in list" :key="$index">
        <label class="left">
          <v-ons-checkbox :input-id="'checkbox-' + $index" :value="item._id" v-model="filterTorneos"></v-ons-checkbox>
        </label>
        <label class="center" :for="'checkbox-' + $index">{{item.nombre}}</label>
      </v-ons-list-item>
    </v-ons-list>

    <p class="center">
      <v-ons-button @click="buscar()">Buscar</v-ons-button>
    </p>
    <p class="center">
      <v-ons-button @click="cancelar()" modifier="outline" class="outline">Cancelar</v-ons-button>
    </p>
  </v-ons-modal>

</v-ons-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import partidosActivosTab from './partidosActivosPage';
import partidosPasadosTab from './partidosPasadosPage';


export default {
  name: 'HomeFixture',
  components: {},
  data() {
    return {
      filterTorneos: [],
      actionSheetVisible: false,

      activeIndex: 0,
      tabs: [
        {
          label: 'Activos',
          page: partidosActivosTab,
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
  computed: {
    ...mapGetters('torneo', [
      'list'
    ]),
    ...mapGetters('fixture', [
      'isLoading'
    ]),
    ...mapGetters('torneo', {
      filter: 'filterTorneos',
      torneosLoadins: 'isLoading'
    })
  },
  methods: {
    ...mapActions('fixture', {
      loadPartidos: 'loadListPartidosActivos'
    }),
    ...mapActions('torneo', [
      'loadTorneos',
      'upDateFilter'
    ]),
    buscar() {
      this.actionSheetVisible = false;
      const self = this;
      this.upDateFilter({ list: this.filterTorneos })
        .then(() => {
          self.loadPartidos({ page: 0, filter: this.filterTorneos });
        });
    },
    cancelar() {
      this.filterTorneos = this.filter;
      this.actionSheetVisible = false;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.loadTorneos();
    });
  }
};
</script>

<style scoped>
.text-center {
  text-align: "center";
}

.outline {
  color: #fff;
}
</style>
