<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$router.push({ name: 'altaEquipo' })" icon="ion-ios-arrow-back, material:ion-android-arrow-back">
      </v-ons-toolbar-button>
    </div>
    <div class="center">Listado de Cuerpos Tecnicos</div>
  </v-ons-toolbar>

  <p class="center search" v-show="list.length == 0">
    <v-ons-search-input class="center" placeholder="Search" v-model="query" @keyup.enter="getList()">
    </v-ons-search-input>
  </p>

  <v-ons-list>
    <v-ons-list-item v-for="(item, $index) in list" :key="item._id" tappable>
      <label class="left">
        <v-ons-checkbox :input-id="'checkbox-' + $index" :value="item._id" v-model="equipo.cuerpoTecnico">
        </v-ons-checkbox>
      </label>
      <label class="center" :for="'checkbox-' + $index">
        {{ item.apellido + ' ' + item.nombre }}
      </label>
    </v-ons-list-item>

    <div class="after-list" v-show="isLoading">
      <!--<v-ons-icon icon="spinner" size="26px" spin></v-ons-icon>-->
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </div>
  </v-ons-list>

  <v-ons-speed-dial position="bottom right" direction="up" :visible="list.length > 0 || equipo.cuerpoTecnico.length > 0" v-show="list.length > 0 || equipo.cuerpoTecnico.length > 0" :open.sync="spdOpen">
    <v-ons-fab>{{equipo.cuerpoTecnico.length}}</v-ons-fab>
    <v-ons-speed-dial-item @click="clean()">
      <i class="zmdi zmdi-search"></i>
    </v-ons-speed-dial-item>
    <v-ons-speed-dial-item @click="cleanAll()" style="background-color: red; color: white;">
      <i class="zmdi zmdi-delete"></i>
    </v-ons-speed-dial-item>
    <v-ons-speed-dial-item @click="$router.push({ name: 'altaEquipo' })" style="background-color: green; color: white;">
      <i class="zmdi zmdi-check-all"></i>
    </v-ons-speed-dial-item>
  </v-ons-speed-dial>

</v-ons-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AltaEquipoCurpoTecnico',
  props: {},
  components: {},
  data() {
    return {
      query: "",
      spdOpen: false
    };
  },
  computed: {
    ...mapGetters('jugador', [
      'isLoading',
      'list',
      'page'
    ]),
    ...mapGetters('altaEquipo', [
      'equipo'
    ]),
  },
  methods: {
    ...mapActions('cuerpoTecnico', [
      'loadItemList',
      'cleanList'
    ]),
    clean() {
      this.cleanList();
      this.query = "";
      this.spdOpen = false;
    },
    cleanAll() {
      this.clean();
      this.equipo.cuerpoTecnico = [];
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

label.center {
  margin-right: 10px;
}
</style>
