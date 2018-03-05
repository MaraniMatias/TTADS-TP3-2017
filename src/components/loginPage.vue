<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Iniciar Sesión</div>
    <div class="right">
    </div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <div class="left">
        <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
      </div>
      <label class="center">
          <v-ons-input float placeholder="Usuario" v-model="username">
          </v-ons-input>
        </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <div class="left">
        <i class="zmdi zmdi-key"></i>
      </div>
      <label class="center">
          <v-ons-input float placeholder="Contraseña" v-model="password">
          </v-ons-input>
        </label>
    </v-ons-list-item>
    <v-ons-list-item>
      <v-ons-button modifier="large" style="margin: 0px 6px 10px 0px">Iniciar Sesion</v-ons-button>
    </v-ons-list-item>
  </v-ons-list>

  <pre>{{ user }}</pre>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('auth');

export default {
  name: 'LoginPage',
  components: {},
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters([
      'user',
      'isLoading',
      'login'
    ])
  },
  methods: {
    ...mapActions([
    ]),
  },
  mounted() {}
};
</script>

<style scoped>
.outline {
  color: #fff;
}

.red {
  background-color: red;
}
</style>
