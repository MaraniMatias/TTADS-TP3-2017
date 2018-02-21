<template>
  <v-ons-list-item ripple modifier="longdivider">
    <template v-if="jugando">
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
    </template>
    <template v-else>
      <div class="left">{{equipoA.nombre}}</div>
      <div class="center">
        <p class="marcador">{{partido.fechaInicio | morph-date('hh:mm')}} <span>hs</span></p>
      </div>
      <div class="right">{{equipoB.nombre}}</div>
    </template>
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
  methods: {
    goToEquipoPage(equipo) {
      this.$router.push({ name: 'equipo', params: { id: equipo.id } });
    }
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
