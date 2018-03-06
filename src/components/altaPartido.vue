<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Alta de Partido</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-nombre">
        <v-ons-input float maxlength="60" required type="text"
          placeholder="Nombre" v-model="entidad.nombre" input-id="input-nombre">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-fecha-inicio">
        <v-ons-input float required type="datetime-local" input-id="input-fecha-nicio"
          placeholder="Fecha de Inicio" v-model="entidad.fechaInicio">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center">
        <v-ons-input float maxlength="60" required type="text"
          placeholder="Estadio" v-model="entidad.estadio">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-categoria">
        <v-ons-input float maxlength="60" required type="text" input-id="input-categoria"
          placeholder="Categoria" v-model="entidad.categoria">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-abritos">
        <v-ons-input float maxlength="60" type="text" input-id="input-abritos"
          placeholder="Abritos" v-model="entidad.abritos">
        </v-ons-input>
      </label>
    </v-ons-list-item>

    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-estado">
        <v-ons-select style="width: 100%" v-model="entidad.estado" select-id="input-estado">
          <option v-for="item in items" :value="item" :key="item">{{ item }}</option>
        </v-ons-select>
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
  name: 'altaPartido',
  components: {},
  data() {
    return {
      items: ['Programado', 'En curso', 'Entretiempo', 'Terminado', 'Iniciado'],
      entidad: {
        nombre: '',
        torneo: '',
        equipoA: '',
        equipoB: '',
        estado: 'Programado',
        estadio: '',
        categoria: '',
        arbitos: '',
        fechaInicio: new Date(),
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

label.center {
  margin-right: 10px;
}
</style>
