<template lang="pug">
  v-app(light)
    customer-navigation(:drawer="drawer")
    customer-toolbar(@drawer="drawer=!drawer")
    v-content
      v-container(fluid)
        v-slide-y-transition(mode='out-in')
          router-view
    customer-footer
</template>

<script>
import Footer from './components/Footer';
import Toolbar from './components/Toolbar';
import Navigation from './components/Navigation-drawer';

export default {
  components: {
    'customer-toolbar': Toolbar,
    'customer-navigation': Navigation,
    'customer-footer': Footer
  },
  data() {
    return {
      drawer: true,

      clipped: false,
      right: true,
      rightDrawer: false,
      fixed: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
  }
}
</script>
