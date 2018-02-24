<template>
  <div v-show="show">
    <v-ons-list-header>{{header}}</v-ons-list-header>
    <v-ons-list-item>{{item[itemKey]}}</v-ons-list-item>
  </div>
</template>

<script>
export default {
  name: 'ItemJugadorProfile',
  components: {},
  props: {
    header: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    itemKey: {
      type: String,
      required: true
    }
  },
  // Usar parametro, pasa id y que este controlador pida los datos
  data() {
    return {};
  },
  computed: {
    show() {
      return Object.prototype.hasOwnProperty.call(this.item, this.itemKey);
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>

</style>
