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
      <label class="center">
        <v-ons-input float maxlength="60" required type="text"
          placeholder="Nombre" v-model="entidad.nombre">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float required type="text"
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
export default {
  name: 'altaEquipo',
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
  methods: {
    submit() {
      console.log(":D");
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
