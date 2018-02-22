<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="center">
      Detalles del partido
    </div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item modifier="longdivider">
      <div class="left equipo" @click="goToEquipoPage(equipoA)">
        <img class="list-item__thumbnail" :src="equipoA.escudoURL">
        <p>{{equipoA.nombre}}</p>
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
        <img class="list-item__thumbnail" :src="equipoB.escudoURL">
        <p>{{equipoB.nombre}}</p>
      </div>
    </v-ons-list-item>
    <v-ons-list-header>Eventos</v-ons-list-header>
    <v-ons-list-item>Lecionado</v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
export default {
  name: 'PartidoPage',
  components: {},
  data() {
    return {
      jugando: {},
      tiempo: '00:00',
      estado: 'estado',
      partido: {
        fechaInicio: new Date(),
        marcador: {
          golesEquipoA: 0,
          golesEquipoB: 2
        }
      },
      equipoA: {
        nombre: "Equipo A",
        escudoURL: "http://www.clker.com/cliparts/o/B/N/P/d/B/escudo-medieval-vermelho.svg.med.png"
      },
      equipoB: {
        nombre: "Equipo B",
        escudoURL: "http://www.clker.com/cliparts/d/G/Y/W/1/o/escudo-medieval-azul.svg.med.png"
      },
    };
  },
  methods: {}
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
