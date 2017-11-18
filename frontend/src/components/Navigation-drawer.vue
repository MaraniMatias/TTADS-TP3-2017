<template lang="pug">
  v-navigation-drawer(fixed :mini-variant='miniVariant' v-model='drawer' app)
    v-list
      v-list-tile(tag='div')
        v-list-tile-title.title Application
        v-list-tile-action
          v-btn(icon @click.stop='miniVariant = !miniVariant')
            v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")
    v-list
      v-list-tile(v-for='(item, i) in items' :key='i' value='true')
        v-list-tile-action
          v-icon(light v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
</template>

<script>
export default {
  name: 'navigation',
  props: {
    drawer: { type: Boolean, default: true }
  },
  data() {
    return {
      miniVariant: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      },{
        icon:'lock_outline',
        title:'Login'
      }]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
