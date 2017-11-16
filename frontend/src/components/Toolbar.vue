<template lang="pug">
  v-toolbar(app)
    v-toolbar-side-icon(@click.stop='drawerClick()')
    v-toolbar-title(v-text='title')
    v-spacer
</template>

<script>
export default {
  name: 'toolbar',
  data() {
    return {
      miniVariant: false,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    drawerClick: function () {
      this.$emit('drawer');
    }
  }
}
</script>

<style scoped>

</style>
