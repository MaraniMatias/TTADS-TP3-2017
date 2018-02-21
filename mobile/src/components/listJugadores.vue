<template>
<v-ons-page>
  {{myProp}}
  <v-ons-list>
    <v-ons-list>
      <item-jugador></item-jugador>
    </v-ons-list>
  </v-ons-list>
</v-ons-page>
</template>

<script>
import itemJugador from './itemJugador';

export default {
  name: 'ListJugadores',
  props: ['myProp'],
  components: {
    itemJugador
  },
  data() {
    return {};
  },
  methods: {
    renderItem: i => i,
  }
};
</script>
