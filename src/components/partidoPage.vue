<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">
      Detalles del partido
    </div>
  </v-ons-toolbar>

  <v-ons-pull-hook :action="onAction" :fixed-content="md" :height="md ? 84 : 64" :on-pull="md && onPull || null" @changestate="state = $event.state">

    <!-- Show this on iOS -->
    <v-ons-icon v-if="!md" size="22px" class="pull-hook-spinner" :icon="state === 'action' ? 'fa-spinner' : 'fa-arrow-down'" :rotate="state === 'preaction' && 180" :spin="state === 'action'">
    </v-ons-icon>

    <!-- Show this on Material Design -->
    <div v-else class="pull-hook-progress">
      <v-ons-progress-circular :value="ratio * 100" :indeterminate="state === 'action'" :style="{ transform: `rotate(${ratio}turn)` }">
      </v-ons-progress-circular>
    </div>
  </v-ons-pull-hook>

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
    <v-ons-list-item modifier="longdivider" tappable :key="index" v-for="(item, index) in listEventos" @click="$ons.notification.alert(item.fecha)">
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
      state: '',
      ratio: 0,

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
    onPull(ratio) {
      this.ratio = ratio;
    },
    onAction(done) {
      setTimeout(() => {
        this.loadPartido({ partidoId: this.partidoId })
          .finally(() => {
            done();
          });
      }, 1500);
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

.pull-hook-progress {
  background-color: white;
  width: 32px;
  height: 32px;
  margin: 30px auto 0;
  border-radius: 100%;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: inline-block;
  line-height: 0px;
}

.pull-hook-progress .progress-circular {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
}

.pull-hook-progress .progress-circular__primary {
  transition: stroke-dashoffset 0s;
}

.pull-hook-spinner {
  color: #666;
  transition: transform .25s ease-in-out;
}
</style>
