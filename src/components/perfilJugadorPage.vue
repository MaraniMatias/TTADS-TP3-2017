<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-back-button @click="goToBack()" ripple></v-ons-back-button>
    </div>
    <div class="center">Perfil del jugador</div>
  </v-ons-toolbar>

  <div class="after-list" v-if="loading">
    <!--<v-ons-icon icon="spinner" size="26px" spin></v-ons-icon>-->
    <v-ons-progress-circular indeterminate></v-ons-progress-circular>
  </div>
  <v-ons-list v-show="!loading">
    <v-ons-list-header>Nombre</v-ons-list-header>
    <v-ons-list-item>{{jugador.apellido + ' ' + jugador.nombre}}</v-ons-list-item>

    <item-jugador-profile header="Edad" :item="jugador" item-key="edad"></item-jugador-profile>
    <item-jugador-profile header="Altura" :item="jugador" item-key="altura"></item-jugador-profile>
    <item-jugador-profile header="Cantidad de goles" :item="jugador" item-key="cantGoles"></item-jugador-profile>
    <item-jugador-profile header="Cantidad de tarjetas amarillas" :item="jugador" item-key="cantAmarillas"></item-jugador-profile>
    <item-jugador-profile header="Cantidad de tarjetas rojas" :item="jugador" item-key="cantRojas"></item-jugador-profile>
    <item-jugador-profile header="Cantidad de minutos" :item="jugador" item-key="cant2min"></item-jugador-profile>

  </v-ons-list>

</v-ons-page>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import config from '../config';

import ItemJugadorProfile from './itemJugadorProfile';

const BaseURL = config.baseURL;

export default {
  name: 'JugadorPerfil',
  components: {
    ItemJugadorProfile
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  // Usar parametro, pasa id y que este controlador pida los datos
  data() {
    return {
      jugador: {},
      loading: true
    };
  },
  methods: {
    goToBack() {
      this.$router.back();
    }
  },
  mounted() {
    const self = this;
    this.$nextTick(function () {
      axios
        .get(`${BaseURL}/jugadores/${this.id}`)
        .then((resp) => {
          // console.log(resp);
          const message = _.get(resp, 'data.message', '') || '';
          const jugador = _.get(resp, 'data.data', {}) || {};
          if (message === 'Success') {
            self.jugador = jugador;
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          self.loading = false;
        });
    });
  }
};
</script>

<style scoped>
.after-list {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
