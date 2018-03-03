<template>
<v-ons-page>
  <div class="header">

    <div class="shield">
      <img :src="equipo.escudoURL" class="shield">
    </div>

    <div class="statistic">
      <div class="value">
        {{equipo.goles}}
      </div>
      <div class="label">
        Goles
      </div>
    </div>
  </div>

  <v-ons-list modifier="inset">
    <v-ons-list-title>Torneo</v-ons-list-title>
    <v-ons-list-item modifier="longdivider" v-for="(partido, index) in fixture">{{partido}}</v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EquipoFixtureTab',
  props: {
    equipoId: [String]
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('equipo', [
      'equipo',
      'isLoading'
    ]),
    ...mapGetters('fixture', {
      fixture: 'fixturePorEquipo',
      isLoadingFixture: 'isLoading'
    })
  },
  methods: {
    ...mapActions('fixture', [
      'loadFixturePorEquipo'
    ])
  },
  updated() {},
  mounted() {
    this.$nextTick(function () {
      this.loadFixturePorEquipo({ equipoId: this.equipoId });
    });
  }
};
</script>

<style scoped>
ons-list {
  margin-top: 12px;
}

.statistic {
  display: block;
  flex-direction: column;
  margin: 1em 0;
  margin: auto;
  max-width: auto;
  -ms-flex-direction: column;
  text-align: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
}

.statistic .label {
  color: rgba(0, 0, 0, .87);
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}

.statistic .value {
  box-sizing: inherit;
  color: #1b1c1d;
  display: block;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 4rem !important;
  font-weight: 400;
  line-height: 1em;
  text-align: center;
  text-transform: uppercase;
  unicode-bidi: isolate;
}

img.shield {
  height: auto;
  min-width: 36px;
  max-height: 4rem;
  width: 4rem;
}

div.shield {
  margin: auto;
}

.header {
  display: flex;
  align-items: center;
  margin-top: 12px;
}
</style>
