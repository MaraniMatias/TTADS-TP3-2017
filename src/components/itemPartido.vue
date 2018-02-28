<template>
  <v-ons-list-item ripple modifier="longdivider" @click="goToPartidoPage()">
    <template v-if="jugando">
      <div class="left equipo" @click="goToEquipoPage(partido.equipoA)">
        <img class="list-item__thumbnail" :src="partido.equipoA.escudoURL">
        <p class="center">{{partido.equipoA.nombre}}</p>
      </div>
      <div class="center">
        <div class="item-center">
          <p class="marcador">
            {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}}
          </p>
          <p class="tiempo">{{partido.estado}}</p>
        </div>
      </div>
      <div class="right equipo" @click="goToEquipoPage(partido.equipoB)">
        <img class="list-item__thumbnail" :src="partido.equipoB.escudoURL">
        <p class="center">{{partido.equipoB.nombre}}</p>
      </div>
    </template>
    <template v-else>
      <div class="left">{{partido.equipoA.nombre}}</div>
      <div class="center">
        <p class="marcador">{{partido.fechaInicio | morph-date('hh:mm')}}</p>
      </div>
      <div class="right">{{partido.equipoB.nombre}}</div>
    </template>
  </v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemPartido',
  props: {
    partido: {
      type: Object,
      required: true
    },
    // Tiempo de juego
    tiempo: {
      type: String,
      default: '00:00'
    }
  },
  data() {
    return {};
  },
  computed: {
    jugando() {
      return new Date() < new Date(this.partido.fechaInicio);
    }
  },
  methods: {
    goToEquipoPage(equipo) {
      this.$router.push({ name: 'equipo', params: { id: equipo.id } });
    },
    goToPartidoPage() {
      // this.$router.push({ name: 'partido', params: { partidoId: this.partido.id } });
      this.$router.push({ name: 'partido', params: { partidoId: this.partido._id } });
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
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
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

p.center {
  margin-bottom: 6px;
  margin-top: 12px;
  text-align: center;
}

.list-item--longdivider__center {
  padding-left: 0px;
  padding-right: 0px;
}

.list-item--longdivider__right {
  padding-left: 6px;
  padding-right: 0px;
}

.list-item--material__left {
  min-height: 48px;
  padding-right: 6px;
}
</style>
