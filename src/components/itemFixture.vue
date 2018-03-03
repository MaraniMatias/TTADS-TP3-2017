<template>
<v-ons-list-item modifier="longdivider" ripple @click="goToPartidoPage()">
  <div class="left">
    <img class="list-item__thumbnail" :src="partido.equipoA.escudoURL" />
  </div>
  <div class="center">
    <span class="list-item__title">
      {{partido.marcador.golesEquipoA + ' - ' + partido.marcador.golesEquipoB}}
    </span>
    <span class="list-item__subtitle">{{partido.categoria}}</span>
  </div>
  <div class="right">
    <img class="list-item__thumbnail" :src="partido.equipoB.escudoURL" />
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
.center {
  margin: auto;
  align-items: center;
  text-align: center;
}

/*
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
*/
</style>
