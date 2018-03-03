<template>
<v-ons-list-item modifier="longdivider" ripple @click="goToPartidoPage()">
  <div class="left">
    <img :src="partido.equipoA.escudoURL" />
  </div>
  <div class="center">
    <p class="marcador">{{partido.marcador.golesEquipoA + ' vs ' + partido.marcador.golesEquipoB}}</p>
    <p class="estado">{{partido.categoria}}</p>
  </div>
  <div class="right">
    <img :src="partido.equipoB.escudoURL" />
  </div>
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemFixture',
  props: {
    partido: {
      type: Object,
      required: true
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goToPartidoPage() {
      this.$router.push({ name: 'partido', params: { partidoId: this.partido._id } });
    }
  },
  updated() {},
  mounted() {}
};
</script>

<style scoped>
img {
  height: 56px;
  width: 56px;
}

.center {
  display: block;
  align-items: center;
  text-align: center;
}

.center p {
  margin-top: 6px;
  margin-bottom: 0px;
}

.list-item--material__center {
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}

.list-item--material__right {
  padding-bottom: 5px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 5px;
}

.list-item--material__left {
  padding-bottom: 5px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 5px;
}

.list-item--material {
  padding-left: 0px;
}
</style>
