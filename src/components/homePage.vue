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

  <v-ons-action-sheet :visible.sync="actionSheetVisible" cancelable title="Elegir Torneos">
    <v-ons-action-sheet-button v-for="(item, $index) in list" :key="$index" ripple>
      <v-ons-list-item tappable>
        <label class="left">
          <v-ons-checkbox :input-id="'checkbox-' + $index" :value="item._id"
            v-model="filterTorneos">
          </v-ons-checkbox>
        </label>
        <label class="center" :for="'checkbox-' + $index">
          {{item.nombre}}
        </label>
      </v-ons-list-item>
    </v-ons-action-sheet-button>
    <v-ons-action-sheet-button style="padding: 0px 12px;">
      <v-ons-button @click="actionSheetVisible = true" modifier="large">Buscar</v-ons-button>
    </v-ons-action-sheet-button>
  </v-ons-action-sheet>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import partidosActivosTab from './partidosActivosPage';
import partidosPasadosTab from './partidosPasadosPage';

const { mapGetters, mapActions } = createNamespacedHelpers('torneo');

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
    ...mapGetters([
      'list',
      'isLoading'
    ]),
  },
  methods: {
    ...mapActions([
      'loadTorneos'
    ]),
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
</style>
