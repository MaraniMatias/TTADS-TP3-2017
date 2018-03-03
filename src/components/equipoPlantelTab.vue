<template>
  <v-ons-page>
    <v-ons-list modifier="inset">
      <v-ons-list-title>Jugadores</v-ons-list-title>

      <v-ons-list-item modifier="longdivider">Item A</v-ons-list-item>
      <v-ons-list-item modifier="longdivider">Item B</v-ons-list-item>
    </v-ons-list>
    <v-ons-list modifier="inset">
      <v-ons-list-title>Cuerpo Tecnico</v-ons-list-title>

      <v-ons-list-item modifier="longdivider">Item A</v-ons-list-item>
      <v-ons-list-item modifier="longdivider">Item B</v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'EquipoPlantelTab',
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
</style>
