<template>
<v-ons-page>
  <v-ons-toolbar modifier="transparent">
    <h1 class="center">Handball</h1>
  </v-ons-toolbar>
  <!--<div class="header">
    <img src="../assets/logo.png">
  </div>-->
  <v-ons-list>
    <v-ons-list-item ripple modifier="chevron" v-for="item in essentialLinks" @click="goTo(item.link)" :key="item.link">
      <div class="left">
        <v-ons-icon fixed-width :icon="item.icon"></v-ons-icon>
      </div>
      <div class="center">{{ item.label }}</div>
    </v-ons-list-item>
    <v-ons-list-header v-show="isLogin">Menú Administrativo</v-ons-list-header>
    <v-ons-list-item ripple modifier="chevron" v-for="item in itemsAdmin" @click="goTo(item.link)" :key="item.link" v-show="isLogin">
      <div class="center">{{ item.label }}</div>
    </v-ons-list-item>
    <v-ons-list-header @click="$ons.notification.alert(serverStatus.server, { title: 'Server en uso' })">{{ serverStatus.version }}</v-ons-list-header>
  </v-ons-list>
</v-ons-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'menu',
  data() {
    return {
      itemsAdmin: [{
        label: 'Partido Jugando',
        link: 'edicionPartido',
      }, {
        label: 'Alta Tipo de Evento',
        link: 'altaTipoEvento',
      }, {
        label: 'Alta de Jugador',
        link: 'altaJugador',
      }, {
        label: 'Alta de Cuerpo Tecnico',
        link: 'altaCuerpoTecnico',
      }, {
        label: 'Alta Partido',
        link: 'altaPartido',
      }, {
        label: 'Alta de Equipo',
        link: 'altaEquipo',
      }, {
        label: 'Alta de Torneo',
        link: 'altaTorneo',
      }],
      essentialLinks: [{
        label: 'Fixture',
        link: 'home',
        icon: 'fa-book',
      }, {
        label: 'Equipos',
        link: 'equiposPage',
        icon: 'ion-person-stalker',
      }, {
        label: 'Jugadores',
        link: 'jugadoresPage',
        icon: 'ion-person',
      }, {
        label: 'Sesión',
        link: 'loginPage',
        icon: 'user-circle',
      }],
    };
  },
  computed: {
    ...mapGetters('splitter', [
      'serverStatus'
    ]),
    ...mapGetters('auth', [
      'isLogin'
    ]),
  },
  methods: {
    ...mapActions('splitter', [
      'getServerStatus'
    ]),
    goTo(name) {
      this.$router.push({ name });
      // window.open(url, '_blank');
      this.$store.commit('splitter/toggle', false);
    },
  },
  mounted() {
    this.getServerStatus();
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-title {
  text-transform: none;
}

ons-list-item {
  cursor: pointer;
}

h1 {
  margin: 0px;
}

.toolbar--material__center {
  color: #000;
}
</style>
