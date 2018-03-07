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
      <label class="center" for="input-fecha-inicio">
        <v-ons-input float required type="date" input-id="input-fecha-nicio"
          placeholder="Fecha de Inicio" v-model="entidad.fechaInicio">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-estadio">
        <v-ons-input float maxlength="60" required type="string" input-id="input-estadio"
          placeholder="Estadio" v-model="entidad.estadio">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-categoria">
        <v-ons-input float maxlength="60" required type="string" input-id="input-categoria"
          placeholder="Categoria" v-model="entidad.categoria">
        </v-ons-input>
      </label>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''">
      <label class="center" for="input-abritos">
        <v-ons-input float maxlength="60" type="string" input-id="input-abritos"
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
    <v-ons-list-item :modifier="md ? 'nodivider' : ''" tappable @click="addEquipo('equipoA')">
      <div class="left">
        <v-ons-icon icon="plus-circle" class="list-item__icon" style="margin: auto;"></v-ons-icon>
      </div>
      <div class="center">{{entidad.equipoA.nombre || 'Agregar Equipo'}}</div>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''" tappable @click="addEquipo('equipoB')">
      <div class="left">
        <v-ons-icon icon="plus-circle" class="list-item__icon" style="margin: auto;"></v-ons-icon>
      </div>
      <div class="center">{{entidad.equipoB.nombre || 'Agregar Equipo'}}</div>
    </v-ons-list-item>
    <v-ons-list-item :modifier="md ? 'nodivider' : ''" tappable>
      <div class="left">
        <v-ons-icon icon="ion-trophy" class="list-item__icon" style="margin: auto;"></v-ons-icon>
      </div>
      <div class="center">{{entidad.torneo.nombre || 'Agregar Torneo'}}</div>
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
    },
    addEquipo(setEquipo) {
      this.$router.push({ name: 'equiposPage', params: { setEquipo } });
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
