<template>
<v-ons-page>
  <v-ons-toolbar>
    <v-ons-back-button @click="goToBack()" ripple></v-ons-back-button>
    <div class="center">Perfil del jugador</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-header>Nombre</v-ons-list-header>
    <v-ons-list-item>{{jugador.nombre + ' ' + jugador.apellido}}</v-ons-list-item>
    <v-ons-list-header>Edad</v-ons-list-header>
    <v-ons-list-item>{{jugador.edad}}</v-ons-list-item>
    <v-ons-list-header>Altura</v-ons-list-header>
    <v-ons-list-item>{{jugador.altura}}</v-ons-list-item>
    <v-ons-list-header>Cantidad de goles</v-ons-list-header>
    <v-ons-list-item>{{jugador.cantGoles}}</v-ons-list-item>
    <v-ons-list-header>Cantidad de tarjetas amarillas</v-ons-list-header>
    <v-ons-list-item>{{jugador.cantAmarillas}}</v-ons-list-item>
    <v-ons-list-header>Cantidad de tarjetas rojas</v-ons-list-header>
    <v-ons-list-item>{{jugador.cantRojas}}</v-ons-list-item>
    <v-ons-list-header>Cantidad de minutos</v-ons-list-header>
    <v-ons-list-item>{{jugador.cant2min}}</v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
export default {
  name: 'JugadorPerfil',
  components: {},
  props: {},
  // Usar parametro, pasa id y que este controlador pida los datos
  data() {
    return {
      jugador: {}
    };
  },
  methods: {
    goToBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>

</style>
