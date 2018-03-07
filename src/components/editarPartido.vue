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

  <v-ons-list>
    <v-ons-list-title>Estado</v-ons-list-title>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-estado">
        <v-ons-select style="width: 100%" v-model="partido.estado" select-id="input-estado">
          <option v-for="item in items" :value="item" :key="item">{{ item }}</option>
        </v-ons-select>
      </label>
    </v-ons-list-item>

    <v-ons-list-title>Marcador</v-ons-list-title>
    <v-ons-list-header>{{partido.equipoA.nombre}}</v-ons-list-header>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-nombre-a">
        <v-ons-input float maxlength="60" required type="number" input-id="input-nombre-a"
          v-model="partido.marcador.golesEquipoA">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-header>{{partido.equipoB.nombre}}</v-ons-list-header>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-nombre">
        <v-ons-input float maxlength="60" required type="number" input-id="input-nombre"
          v-model="partido.marcador.golesEquipoB">
        </v-ons-input>
      </label>
    </v-ons-list-item>

    <v-ons-list-title>Eventos</v-ons-list-title>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-tiempo-eventos">
        <v-ons-select style="width: 100%" v-model="selectTipoEventos" select-id="input-tiempo-eventos">
          <option v-for="item in tipoEventos" :value="item._id" :key="item._id">{{ item.nombre }}</option>
        </v-ons-select>
      </label>
    </v-ons-list-item>

    <v-ons-list-item>
      <v-ons-button modifier="large" style="margin: 0px 6px 10px 0px"
        :disabled="isLoading || selectTipoEventos == ''" @click="submit()">
        <span v-if="!isLoading">Actualizar</span>
        <v-ons-icon icon="ion-load-c" spin size="26px" v-else></v-ons-icon>
      </v-ons-button>
    </v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
    return {
      selectTipoEventos: '',
      items: ['Programado', 'En curso', 'Entretiempo', 'Terminado', 'Iniciado'],
    };
  },
  computed: {
    ...mapGetters('altaPartido', [
      'isLoading',
      'partido',
      'tipoEventos'
    ]),
  },
  methods: {
    ...mapActions('altaPartido', [
      'loadPartido',
      'loadTipoEvento',
      'actualizarPartido'
    ]),
    submit() {
      this.partido.selectTipoEventos = this.selectTipoEventos;

      this.actualizarPartido(this.partido)
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
  mounted() {
    this.loadPartido({ partidoId: this.partidoId });
    this.loadTipoEvento();
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
