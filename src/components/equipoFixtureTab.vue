<template>
  <v-ons-page>
    <div class="statistic">
      <div class="value">
        22
      </div>
      <div class="label">
        Goles
      </div>
    </div>

    <v-ons-list modifier="inset">
      <v-ons-list-title>Torneo</v-ons-list-title>
      <v-ons-list-item modifier="longdivider">Partido</v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'EquipoFixtureTab',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  updated() {},
  mounted() {}
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
  margin-top: 12px;
  max-width: auto;
  -ms-flex-direction: column;
  text-align: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
}
.statistic .label {
  color: rgba(0,0,0,.87);
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.statistic .value {
  box-sizing: inherit;
  color: #1b1c1d;
  display: block;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 4rem;
  font-size: 4rem !important;
  font-weight: 400;
  line-height: 1em;
  text-align: center;
  text-transform: uppercase;
  unicode-bidi: isolate;
}
</style>
