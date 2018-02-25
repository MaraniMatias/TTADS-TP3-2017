<template>
<v-ons-list-item tappable modifier="longdivider" @click="goToProfile()">
  <div class="center">
    {{equipo.nombre}}
  </div>
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemEquipo',
  props: {
    equipo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    goToProfile() {
      this.$router.push({ name: 'equipo', params: { id: this.equipo._id } });
    }
  }
};
</script>

<style scoped>

</style>
