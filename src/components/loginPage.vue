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
          <v-ons-input float placeholder="Usuario" v-model="username" type="text">
          </v-ons-input>
        </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <div class="left">
        <i class="zmdi zmdi-key"></i>
      </div>
      <label class="center">
          <v-ons-input float placeholder="Contraseña" v-model="password" type="password">
          </v-ons-input>
        </label>
    </v-ons-list-item>
    <v-ons-list-item>
      <v-ons-button modifier="large" style="margin: 0px 6px 10px 0px" :disabled="disabledBtn" @click="startLogIn()">
        <span v-if="!isLoading">Iniciar Sesion</span>
        <v-ons-icon icon="ion-load-c" spin size="26px" v-else></v-ons-icon>
      </v-ons-button>
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
      'isLogin'
    ]),
    disabledBtn() {
      return this.isLoading || this.username === '' || this.password === '';
    }
  },
  methods: {
    ...mapActions([
      'logOut',
      'logIn',
      'getUserInfo'
    ]),
    startLogIn() {
      this.logIn({
        username: this.username,
        password: this.password
      }).then(() => {
        $ons.notification.toast('Sesión iniciada con exito');
      });
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>

<style scoped>
ons-list {
  padding-top: 16px;
}
</style>
