<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="center">Listado de Equipos</div>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>

  <v-ons-pull-hook :action="loadItem" @changestate="state = $event.state">
    <span v-show="state === 'initial'"> Pull to refresh </span>
    <span v-show="state === 'preaction'"> Actualizar </span>
    <span v-show="state === 'action'">
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </span>
  </v-ons-pull-hook>

  <p class="center search">
    <v-ons-search-input class="center" placeholder="Search something" v-model="query">
    </v-ons-search-input>
  </p>

  <v-ons-list>
    <v-ons-list-item ripple v-for="item in items">
      {{item}}
    </v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
export default {
  name: 'JugadoresPage',
  props: {},
  components: {},
  data() {
    return {
      query: "",
      state: 'initial',
      items: [1, 2, 3]
    };
  },
  methods: {
    loadItem(done) {
      setTimeout(() => {
        this.items = [...this.items, this.items.length + 1];
        done();
      }, 400);
    }
  }
};
</script>

<style scoped>
p.search {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
