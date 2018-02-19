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
      </v-ons-list>
    </div>
  </v-ons-card>

</v-ons-page>
</template>

<script>
const homePage = {
  template: '#home',
  props: ['myProp']
};

const settingsPage = {
  template: '#settings'
};

export default {
  name: 'home',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          label: 'Fixture',
          page: homePage,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "homePage"
        },
        {
          label: 'Jugados',
          page: settingsPage,
          key: "settingsPage"
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
