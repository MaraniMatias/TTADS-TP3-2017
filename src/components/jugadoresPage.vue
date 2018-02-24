<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Listado de Equipos</div>
  </v-ons-toolbar>

  <p class="center search">
    <v-ons-search-input class="center" placeholder="Search something" v-model="query" @keyup.enter="getList()">
    </v-ons-search-input>
  </p>

  <v-ons-list>
    <item-jugador v-for="(item, index) in items" :jugador="item" :key="index"></item-jugador>
    <div class="after-list" v-show="loading">
      <!--<v-ons-icon icon="spinner" size="26px" spin></v-ons-icon>-->
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </div>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
// import { mapActions } from 'vuex';
import ItemJugador from './itemJugador';
import config from '../config';

const BaseURL = config.baseURL;

export default {
  name: 'JugadoresPage',
  props: {},
  components: {
    ItemJugador
  },
  data() {
    return {
      page: 0,
      query: "",
      loading: false,
      items: []
    };
  },
  methods: {
    // ...mapActions(['getJugadores']),
    getJugadores() {
      this.loading = true;
      return axios
        .get(`${BaseURL}/jugadores`, {
          params: {
            jugador: this.query,
            skip: 5 * this.page
          }
        });
    },
    getList() {
      const self = this;
      this.page = 0;
      if (this.query) {
        this.getJugadores()
          .then((resp) => {
            // console.log(resp);
            const message = _.get(resp, 'data.message', '') || '';
            const jugadores = _.get(resp, 'data.data', []) || [];
            if (message === 'Success') {
              self.items = jugadores;
            }
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            self.loading = false;
          });
      }
    },
    loadMore(done) {
      const self = this;
      if (this.query) {
        this.getJugadores()
          .then((resp) => {
            // console.log(resp);
            const message = _.get(resp, 'data.message', '') || '';
            const jugadores = _.get(resp, 'data.data', []) || [];
            if (message === 'Success') {
              self.items = self.items.concat(jugadores);
              self.page += 1;
            }
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            self.loading = false;
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
