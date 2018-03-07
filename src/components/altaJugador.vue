<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Alta de Jugador</div>
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
      <label class="center" for="input-apellido">
        <v-ons-input float maxlength="60" required type="string" input-id="input-apellido"
          placeholder="Apellido" v-model="entidad.apellido">
        </v-ons-input>
      </label>
    </v-ons-list-item>

    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-peso">
        <v-ons-input float type="number" input-id="input-peso"
          placeholder="Peso" v-model="entidad.peso">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-altura">
        <v-ons-input float type="number" input-id="input-altura"
          placeholder="Altura" v-model="entidad.altura">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-edad">
        <v-ons-input float type="number" input-id="input-edad"
          placeholder="Edad" v-model="entidad.edad">
        </v-ons-input>
      </label>
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

const { mapGetters, mapActions } = createNamespacedHelpers('jugador');

export default {
  name: 'altaJugador',
  components: {},
  data() {
    return {
      entidad: {
        nombre: '',
        apellido: '',
        peso: 63,
        altura: 160,
        edad: 27,
      },
    };
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
    disabledBtn() {
      return !this.entidad.nombre || !this.entidad.apellido;
    },
  },
  methods: {
    ...mapActions({
      post: 'postJugador',
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

label.center {
  margin-right: 10px;
}
</style>
