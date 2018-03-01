<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$router.back()" icon="ion-ios-arrow-back, material:ion-android-arrow-back"></v-ons-toolbar-button>
    </div>
    <div class="center">Detalles del partido</div>
    <div class="right">
      <!-- Cuando activa la campana, enviar al backend para que registre en socket y con cordova o ons enviar notificaiones cuando ocurra un evento, tambien podemos buscar la manera de dejar un servicio para que muestre notificaiones cuando la app esta cerrada -->
      <v-ons-toolbar-button icon="ion-ios-bell-outline"></v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>

  <div style="text-align: center; margin: 40px; color: #666" v-if="isLoading">
    <p>
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </p>
  </div>

  <v-ons-list class="bg-trans" v-show="!isLoading">
    <pull-hook :on-action="onAction"></pull-hook>

    <v-ons-card>
      <div class="content">
        <v-ons-list>
          <item-partido :partido="partido"></item-partido>
        </v-ons-list>
      </div>
    </v-ons-card>

    <v-ons-list-title>Notifications</v-ons-list-title>
    <v-ons-list modifier="inset">
      <v-ons-list-item modifier="longdivider" tappable :key="index"
        v-for="(item, index) in listEventos"
        @click="$ons.notification.alert(item.fecha +'Detalles: ' + item.descripcion)">
        <div class="center">{{item.evento.nombre}}</div>
      </v-ons-list-item>
    </v-ons-list>

  </v-ons-list>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import ItemPartido from "./itemPartido";

const { mapGetters, mapActions } = createNamespacedHelpers('partido');

// Listar demas detalles como estadio, categoria ...
export default {
  name: 'PartidoPage',
  components: {
    ItemPartido
  },
  props: {
    partidoId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tiempo: '00:00',
      estado: 'estado',
    };
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'listEventos',
      'page',
      'partido'
    ])
  },
  methods: {
    ...mapActions([
      'cleanList',
      'loadItemList',
      'loadPartido'
    ]),
    clean() {
      this.cleanList();
    },
    getList() {
      this.loadItemList({ partidoId: this.partidoId, page: 0 });
    },
    loadMore(done) {
      const page = this.page === 0 ? 1 : this.page;
      this.loadItemList({ partidoId: this.partidoId, page })
        .finally(() => {
          done();
        });
    },
    goToEquipoPage(equipo) {
      this.$router.push({ name: 'equipo', params: { id: equipo.id } });
    },
    onAction(done) {
      setTimeout(() => {
        this.loadPartido({ partidoId: this.partidoId })
          .finally(() => {
            done();
          });
      }, 1000);
    },
  },
  mounted() {
    // const self = this;
    this.$nextTick(function () {
      this.getList();
      this.loadPartido({ partidoId: this.partidoId });
    });
  }
};
</script>

<style scoped>
ons-list.bg-trans {
  background-color: transparent;
}

.list-item--material {
  padding: 0 0 0 6px;
}
</style>
