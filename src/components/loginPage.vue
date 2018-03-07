<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Sesión</div>
    <div class="right">
    </div>
  </v-ons-toolbar>

  <v-ons-list v-show="!isLogin">
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <div class="left">
        <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
      </div>
      <label class="center">
        <v-ons-input float placeholder="Usuario" @keyup.enter="startLogIn()"
          v-model="username" type="string" required>
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <div class="left">
        <i class="zmdi zmdi-key"></i>
      </div>
      <label class="center">
        <v-ons-input float placeholder="Contraseña" @keyup.enter="startLogIn()"
          v-model="password" type="password" required>
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item>
      <v-ons-button modifier="large" style="margin: 0px 6px 10px 0px" :disabled="disabledBtn" @click="startLogIn()">
        <span v-if="!isLoading">Iniciar Sesion</span>
        <v-ons-icon icon="ion-load-c" spin size="26px" v-else></v-ons-icon>
      </v-ons-button>
      <!--<button class="button">Button</button>-->
    </v-ons-list-item>
  </v-ons-list>

  <v-ons-list-title v-show="isLogin">Perfil del usuario</v-ons-list-title>
  <v-ons-list modifier="inset" v-show="isLogin">
    <item-jugador-profile header="Nombre" :item="user" item-key="nombre"></item-jugador-profile>
    <item-jugador-profile header="Apellido" :item="user" item-key="apellido"></item-jugador-profile>
    <item-jugador-profile header="Nombre de usuario" :item="user" item-key="username"></item-jugador-profile>
    <item-jugador-profile header="Rol" :item="user" item-key="role"></item-jugador-profile>
  </v-ons-list>
  <v-ons-list class="bg-trans" v-show="isLogin">
    <v-ons-list-item>
      <v-ons-button modifier="large" style="margin: 0px 6px 0px 0px" :disabled="!isLogin" @click="startLogOut()" class="red">
        <span v-if="!isLoading">Cerrar Sesion</span>
        <v-ons-icon icon="ion-load-c" spin size="26px" v-else></v-ons-icon>
      </v-ons-button>
    </v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import ItemJugadorProfile from './itemJugadorProfile';

const { mapGetters, mapActions } = createNamespacedHelpers('auth');

export default {
  name: 'LoginPage',
  components: {
    ItemJugadorProfile
  },
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
      if (!this.disabledBtn) {
        this.logIn({
          username: this.username,
          password: this.password
        }).then(() => {
          if(this.isLogin){
            this.$ons.notification.toast('Sesión iniciada con exito', {
              timeout: 1000
            });
          }else{
            this.$ons.notification.toast('Credenciales incorrectas', {
              timeout: 1000
            });
          }
        });
      }
    },
    startLogOut() {
      this.logOut()
        .finally(() => {
          this.username = '';
          this.password = '';
          this.$ons.notification.toast('Sesión cerrada con exito', {
            timeout: 1000
          });
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

ons-list.bg-trans {
  background-color: transparent;
}

.red {
  background-color: red;
}
</style>
