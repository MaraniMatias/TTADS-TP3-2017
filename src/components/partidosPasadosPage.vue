<template>
<v-ons-page>
  <v-ons-card>
    <div class="title">Hoy</div>
    <div class="content">
      <v-ons-list>
        <v-ons-list-item>Item</v-ons-list-item>
        <itme-partido jugando="true" :partido="partido" :equipoA="equipoA" :equipoB="equipoB"></itme-partido>
        <item-partido :partido="partido" :equipoA="equipoA" :equipoB="equipoB"></item-partido>
      </v-ons-list>
    </div>
  </v-ons-card>
</v-ons-page>
</template>

<script>
import ItemPartido from "./itemPartido";

export default {
  name: 'TabPartidosPasados',
  components: {
    ItemPartido
  },
  data() {
    return {
      partido: {
        estado: 'estado',
        fechaInicio: new Date(),
        marcador: {
          golesEquipoA: 0,
          golesEquipoB: 0
        }
      },
      equipoA: {
        nombre: "Equipo A",
        escudoURL: "http://www.clker.com/cliparts/o/B/N/P/d/B/escudo-medieval-vermelho.svg.med.png"
      },
      equipoB: {
        nombre: "Equipo B",
        escudoURL: "http://www.clker.com/cliparts/d/G/Y/W/1/o/escudo-medieval-azul.svg.med.png"
      },
    };
  },
  methods: {}
};
</script>

<style scoped>
.text-center {
  text-align: "center";
}
</style>
