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
      <v-ons-toolbar-button slot="right" id="info-button" @click="menuVisible = true">
        <v-ons-icon v-if="md" icon="md-more-vert"></v-ons-icon>
        <span v-else>More</span>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>

  <v-ons-tabbar swipeable tappable position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>

  <v-ons-popover cancelable direction="down" cover-target target="#info-button" :visible.sync="menuVisible">
    <v-ons-list>
      <v-ons-list-item tappable @click="menuVisible = false; actionSheetVisible = true" :modifier="md ? 'nodivider' : 'longdivider'">
        <div class="center">Filtrar Torneos</div>
      </v-ons-list-item>
      <v-ons-list-item tappable :modifier="md ? 'nodivider' : 'longdivider'">
        <div class="center">Iniciar Sesión</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-popover>

  <v-ons-fab v-if="md && listTorneos.length > 0" position="bottom right" @click="actionSheetVisible = true">
    <i class="zmdi zmdi-filter-list"></i>
  </v-ons-fab>

  <v-ons-modal :visible="actionSheetVisible">
    <v-ons-list modifier="inset">
      <v-ons-list-header>Torneos a listar</v-ons-list-header>

      <v-ons-list-item tappable v-for="(item, $index) in listTorneos" :key="$index">
        <label class="left">
          <v-ons-checkbox :input-id="'checkbox-' + $index" :value="item._id" v-model="filterTorneos"></v-ons-checkbox>
        </label>
        <label class="center" :for="'checkbox-' + $index">{{item.nombre}}</label>
      </v-ons-list-item>
    </v-ons-list>

    <p class="center">
      <v-ons-button class="red" @click="cleanFilter()" v-show="filterTorneos.length > 0">Limpiar</v-ons-button>
      <v-ons-button @click="updateFilter()">Buscar</v-ons-button>
    </p>
    <p class="center">
      <v-ons-button @click="cancel()" modifier="outline" class="outline">Cancelar</v-ons-button>
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
      menuVisible: false,

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
      'listTorneos'
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
    cleanFilter() {
      const self = this;
      this.upDateFilter({ list: [] })
        .then(() => {
          self.filterTorneos = [];
        });
    },
    updateFilter() {
      this.actionSheetVisible = false;
      const self = this;
      this.upDateFilter({ list: this.filterTorneos })
        .then(() => {
          self.loadPartidos({ page: 0, filter: this.filterTorneos });
        });
    },
    cancel() {
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
.outline {
  color: #fff;
}

.red {
  background-color: red;
}
</style>
