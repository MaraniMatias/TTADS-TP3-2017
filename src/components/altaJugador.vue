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
      <label class="center">
        <v-ons-input float maxlength="60" required type="text"
          placeholder="Nombre" v-model="entidad.nombre">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float maxlength="60" required type="text"
          placeholder="Apellido" v-model="entidad.apellido">
        </v-ons-input>
      </label>
    </v-ons-list-item>

    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float type="numeric"
          placeholder="Peso" v-model="entidad.peso">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float type="numeric"
          placeholder="Altura" v-model="entidad.altura">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float type="numeric"
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

</style>
