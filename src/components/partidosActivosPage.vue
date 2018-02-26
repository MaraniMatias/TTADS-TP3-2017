<template>
<v-ons-page>

  <v-ons-list>
    <v-ons-pull-hook :action="loadItem" @changestate="state = $event.state">
      <span v-show="state === 'initial'">
        <v-ons-icon icon="ion-refresh"></v-ons-icon>
      </span>
      <span v-show="state === 'preaction'">
        <v-ons-icon icon="ion-refresh"></v-ons-icon>
      </span>
      <span v-show="state === 'action'">
        <v-ons-progress-circular indeterminate></v-ons-progress-circular>
      </span>
    </v-ons-pull-hook>

    <v-ons-list-item>
      <v-ons-row>
        <v-ons-col>

          <v-ons-card>
            <div class="title">Hoy</div>
            <div class="content">
              <v-ons-list>
                <item-partido jugando :partido="partido" :equipoA="equipoA" :equipoB="equipoB"></item-partido>
                <item-partido :partido="partido" :equipoA="equipoA" :equipoB="equipoB"></item-partido>
              </v-ons-list>
            </div>
          </v-ons-card>

        </v-ons-col>
      </v-ons-row>
    </v-ons-list-item>
  </v-ons-list>

</v-ons-page>
</template>

<script>
import ItemPartido from "./itemPartido";

export default {
  name: 'PaginaActivosPasados',
  components: {
    ItemPartido
  },
  data() {
    return {
      state: 'initial',
      items: [1, 2, 3],
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
  methods: {
    loadItem(done) {
      setTimeout(() => {
        this.items = [...this.items, this.items.length + 1];
        done();
      }, 400);
    }
  }
};
</script>

<style scoped>
.text-center {
  text-align: "center";
}

.list-item--material {
  padding: 0 0 0 6px;
}

ons-list {
  background-color: transparent;
}
</style>
