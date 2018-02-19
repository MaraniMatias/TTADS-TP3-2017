<template>
<v-ons-list-item v-if="jugando">
  <v-ons-list-item>
    <div class="left equipo">
      <img class="list-item__thumbnail" :src="equipoA.escudoURL">
      <p>
        {{equipoA.nombre}}
      </p>
    </div>
    <div class="center">
      <div class="item-center">
        <p class="marcador">
          {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}}
        </p>
        <p class="tiempo">{{partido.fechaInicio | morph-date('MMM DD, YYYY')}}</p>
      </div>
    </div>
    <div class="right equipo">
      <img class="list-item__thumbnail" :src="equipoB.escudoURL">
      <p>
        {{equipoB.nombre}}
      </p>
    </div>
  </v-ons-list-item>
</v-ons-list-item>
<v-ons-list-item v-else>
  <v-ons-list-item>
    <div class="left">
      {{equipoA.nombre}}
    </div>
    <div class="center">
      <p class="marcador"> {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}} </p>
    </div>
    <div class="right">
      {{equipoB.nombre}}
    </div>
  </v-ons-list-item>
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemTeam',
  props: {
    // Predeterminado false, cambia la forma en que se muestra la informacion.
    jugando: {
      type: Boolean,
      default: false
    },
    // Tiempo de juego
    tiempo: {
      type: String,
      default: '00:00'
    },
    partido: {
      required: true
    },
    // Datos de los equipos, nombre, goles
    equipoA: {
      required: true,
      // Podemos usarlo para verificcar los datos minimos.
      /* validator: function (value) {
        return typeof value !== 'undefined';
      } */
    },
    equipoB: {
      required: true,
      // Podemos usarlo para verificcar los datos minimos.
      /* validator: function (value) {
        return typeof value !== 'undefined';
      } */
    }
  },
  data() {
    return {};
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
  margin: auto;
  margin-bottom: 12px;
  margin-top: 0px;
  text-align: center;
}

.tiempo {
  font-size: 18px;
  margin: auto;
  margin-bottom: 12px;
  margin-top: 0px;
  text-align: center;
}

.equipo {
  display: block;
}
</style>
