<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Alta de Equipo</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-nombre">
        <v-ons-input float maxlength="60" required type="string" input-id="input-nombre"
          placeholder="Nombre" v-model="entidad.nombre">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-escudo">
        <v-ons-input float required type="string" input-id="input-escudo"
          placeholder="URL del escudo" v-model="entidad.escudoURL">
        </v-ons-input>
      </label>
    </v-ons-list-item>

    <v-ons-list-header>Agregar</v-ons-list-header>
    <v-ons-list-item>
      <div class="center" style="padding-right: 10px;">
        <v-ons-button class="btn" @click="$router.push({ name: 'altaEquipoJugadores' })">Jugadores</v-ons-button>
        <v-ons-button class="btn" @click="$router.push({ name: 'altaEquipoCurpoTecnico' })">Cuerpo Tecnico</v-ons-button>
      </div>
    </v-ons-list-item>

    <v-ons-list-item>
      <v-ons-button modifier="large" style="margin: 0px 6px 10px 0px" :disabled="disabledBtn" @click="submit()">
        <span v-if="!isLoading">Guardar</span>
        <v-ons-icon icon="ion-load-c" spin size="26px" v-else></v-ons-icon>
      </v-ons-button>
    </v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('equipo');

export default {
  name: 'altaEquipo',
  components: {},
  data() {
    return {
      entidad: {
        nombre: '',
        escudoURL: '',
        jugadores: [],
        cuerpoTecnico: []
      },
    };
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
    disabledBtn() {
      return !this.entidad.nombre ||
        !this.entidad.jugadores.length ||
        !this.entidad.cuerpoTecnico.length;
    },
  },
  methods: {
    ...mapActions({
      post: 'postEquipo',
    }),
    submit() {
      this.post(this.entidad)
        .then(() => {
          this.$ons.notification.toast('Guardado con exito.', {
            timeout: 1000
          });
        })
        .catch(() => {
          this.$ons.notification.toast('Ha ocurrido un error.', {
            timeout: 2000
          });
        });
    }
  },
  mounted() {}
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
