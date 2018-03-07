<template>
<v-ons-list-item tappable modifier="longdivider" @click="itemAction()">
  <div class="center">{{equipo.nombre}}</div>
</v-ons-list-item>
</template>

<script>
export default {
  name: 'ItemEquipo',
  props: {
    equipo: {
      type: Object,
      required: true
    },
    setEquipo: {
      type: [String, Boolean],
      default: false,
      // https://vuejs.org/v2/guide/components.html#Prop-Validation
      validator(value) {
        let rta = false;
        if (typeof value === 'boolean') {
          rta = value === false;
        }
        if (typeof value === 'string') {
          rta = (value === 'equipoA' || value === 'equipoB');
        }
        return rta;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    itemAction() {
      if (this.setEquipo) {
        console.log('Set equipo', this.setEquipo, this.equipo);
      } else {
        // goToProfile
        this.$router.push({ name: 'equipo', params: { id: this.equipo._id } });
      }
    },
  }
};
</script>

<style scoped>

</style>
