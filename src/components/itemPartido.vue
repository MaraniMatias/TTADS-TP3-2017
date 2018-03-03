<template>
  <v-ons-list-item :ripple="!noClick" modifier="longdivider" @click="goToPartidoPage()">
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
      <div class="left" @click="goToEquipoPage(partido.equipoB)">
        <p class="center no-jugando">{{partido.equipoA.nombre}}</p>
      </div>
      <div class="center">
        <p class="marcador">{{partido.fechaInicio | morph-date('hh:mm')}}</p>
        <p class="estado">{{partido.estado}}</p>
      </div>
      <div class="right" @click="goToEquipoPage(partido.equipoB)">
        <p class="center no-jugando">{{partido.equipoB.nombre}}</p>
      </div>
    </template>
  </v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemPartido',
  props: {
    noClick: {
      type: Boolean,
      default: false
    },
    partido: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    jugando() {
      return new Date() > new Date(this.partido.fechaInicio);
    }
  },
  methods: {
    goToEquipoPage(equipo) {
      if (this.noClick) {
        this.$router.push({ name: 'equipo', params: { id: equipo._id } });
      }
    },
    goToPartidoPage() {
      if (!this.noClick) {
        // this.$router.push({ name: 'partido', params: { partidoId: this.partido.id } });
        this.$router.push({ name: 'partido', params: { partidoId: this.partido._id } });
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      console.log(this.partido.equipoA);
      console.log(this.partido.equipoB);
    });
  }
};
</script>

<style scoped>
.center,
.center p {
  align-items: center;
  margin: auto;
}

.item-center {
  display: block;
  margin: auto;
}

.marcador {
  font-size: 30px;
  font-weight: bold;
  line-height: 28px;
  margin: auto;
  margin-top: 12px;
  text-align: center;
}

.marcador.no-jugando {
  font-size: 26px;
  font-weight: bold;
  line-height: 20px;
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

p.no-jugando {
  margin-top: 6px;
}

p.estado {
  font-size: 18px;
  line-height: 16px;
  margin-bottom: 6px;
  margin-top: 6px;
  text-align: center;
}

.list-item--longdivider__center {
  padding-left: 0px;
  padding-right: 0px;
}

.list-item--longdivider__right {
  padding-left: 6px;
  padding-right: 6px;
}

.list-item--material__left {
  min-height: 48px;
  padding-right: 6px;
}
</style>
