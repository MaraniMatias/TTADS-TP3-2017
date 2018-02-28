<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-toolbar>
    <div class="left">
     <v-ons-back-button @click="$router.back()"></v-ons-back-button>
    </div>
    <div class="center">
      Detalles del partido
    </div>
    <div class="right">
      <!-- Cuando activa la campana, enviar al backend para que registre en socket y con cordova o ons enviar notificaiones cuando ocurra un evento, tambien podemos buscar la manera de dejar un servicio para que muestre notificaiones cuando la app esta cerrada -->
      <v-ons-toolbar-button icon="ion-ios-bell-outline"></v-ons-toolbar-button>
    </div>
  </v-ons-toolbar>

  <pull-hook :on-action="onAction"></pull-hook>

  <div style="text-align: center; margin: 40px; color: #666" v-if="isLoading">
    <p>
      <v-ons-progress-circular indeterminate></v-ons-progress-circular>
    </p>
  </div>

  <v-ons-list v-show="!isLoading">
    <v-ons-list-item modifier="longdivider">
      <div class="left equipo" @click="goToEquipoPage(equipoA)">
        <img class="list-item__thumbnail" :src="partido.equipoA.escudoURL">
        <p>{{partido.equipoA.nombre}}</p>
      </div>
      <div class="center">
        <div class="item-center">
          <p class="marcador">
            {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}}
          </p>
          <p class="tiempo">{{partido.fechaInicio | morph-date('hh:mm')}}</p>
        </div>
      </div>
      <div class="right equipo" @click="goToEquipoPage(equipoB)">
        <img class="list-item__thumbnail" :src="partido.equipoB.escudoURL">
        <p>{{partido.equipoB.nombre}}</p>
      </div>
    </v-ons-list-item>
  </v-ons-list>

  <v-ons-list-title>Notifications</v-ons-list-title>
  <v-ons-list modifier="inset">
    <v-ons-list-item modifier="longdivider" tappable :key="index" v-for="(item, index) in listEventos" @click="$ons.notification.alert(item.fecha +'Detalles: ' + item.descripcion)">
      <div class="center">{{item.evento.nombre}}</div>
    </v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('partido');

// Listar demas detalles como estadio, categoria ...
export default {
  name: 'PartidoPage',
  components: {},
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
.center {
  align-items: center;
  margin: auto;
}

.item-center {
  display: block;
  margin: auto;
}

.marcador {
  font-size: 26px;
  line-height: 28px;
  margin: auto;
  text-align: center;
}

.marcador span {
  font-size: 18px;
  line-height: 16px;
}

.tiempo {
  font-size: 18px;
  margin: auto;
  margin-bottom: 6px;
  margin-top: 12px;
  text-align: center;
}

.equipo {
  cursor: pointer;
  display: block;
}

.equipo img {
  margin: auto;
}
</style>
