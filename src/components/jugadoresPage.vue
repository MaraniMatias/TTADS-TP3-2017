<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Listado de Jugadores</div>
  </v-ons-toolbar>

  <p class="center search" v-show="list.length == 0">
    <v-ons-search-input class="center" placeholder="Search" v-model="query" @keyup.enter="getList()">
    </v-ons-search-input>
  </p>

  <v-ons-list>
    <item v-for="(item, index) in list" :jugador="item" :key="index"></item>
    <div class="after-list" v-show="isLoading">
      <!--<v-ons-icon icon="spinner" size="26px" spin></v-ons-icon>-->
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </div>
  </v-ons-list>

  <v-ons-fab position="bottom right" :visible="list.length > 0" v-show="list.length > 0" @click="clean()">
    <i class="zmdi zmdi-search"></i>
  </v-ons-fab>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Item from './itemJugador';

const { mapGetters, mapActions } = createNamespacedHelpers('jugador');

export default {
  name: 'JugadoresPage',
  props: {},
  components: {
    Item
  },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'list',
      'page'
    ])
  },
  methods: {
    ...mapActions([
      'loadItemList',
      'cleanList'
    ]),
    clean() {
      this.cleanList();
      this.query = "";
    },
    getList() {
      if (this.query) {
        this.loadItemList({ query: this.query, page: 0 });
      }
    },
    loadMore(done) {
      const page = this.page === 0 ? 1 : this.page;
      if (this.query) {
        this.loadItemList({ query: this.query, page })
          .finally(() => {
            done();
          });
      }
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

.after-list {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
