<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Alta de Torneo</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float maxlength="60" required type="String"
          placeholder="Nombre" v-model="entidad.nombre">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-fecha-inicio">
        <v-ons-input float required type="Date" input-id="input-fecha-inicio"
          placeholder="Fecha de Inicio" v-model="entidad.fechaInicio">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-fecha-fin">
        <v-ons-input float required type="Date" input-id="input-fecha-fin"
          placeholder="Fecha de Fin" v-model="entidad.fechaFin">
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

const { mapGetters, mapActions } = createNamespacedHelpers('torneo');

export default {
  name: 'altaTorneo',
  components: {},
  data() {
    return {
      entidad: {
        nombre: '',
        fechaInicio: new Date(),
        fechaFin: new Date()
      },
    };
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
    disabledBtn() {
      return !this.entidad.nombre || !this.entidad.fechaInicio || !this.entidad.fechaFin;
    },
  },
  methods: {
    ...mapActions([
      'postTorneos',
    ]),
    submit() {
      this.postTorneos(this.entidad)
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
