<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="center">Fixture</div>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>

  <v-ons-tabbar swipeable tappable position="top" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>

</v-ons-page>
</template>

<script>
import partidosActivosTab from './partidosActivosPage';
import partidosPasadosTab from './partidosPasadosPage';

export default {
  name: 'home-fixture',
  components: {},
  data() {
    return {
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
  methods: {}
};
</script>

<style scoped>
.text-center {
  text-align: "center";
}
</style>
