<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Editar Partido</div>
  </v-ons-toolbar>

  <v-ons-list></v-ons-list>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('altaPartido');

export default {
  name: 'editarPartido',
  props: {
    partidoId: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'partido'
    ]),
  },
  methods: {
    ...mapActions([
      'loadPartido'
    ]),
    submit() {
      console.log(":D");
    }
  },
  mounted() {
    this.loadPartido({ partidoId: this.partidoId });
  }
};
</script>

<style scoped>
ons-list {
  padding-top: 12px;
}

ons-input {
  width: 100%;
}

.btn {
  margin: auto;
  background-color: lightslategrey;
}

label.center {
  margin-right: 10px;
}
</style>
