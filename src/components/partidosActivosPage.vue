<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-list>

    <v-ons-pull-hook :action="onAction" :fixed-content="md" :height="md ? 84 : 64" :on-pull="md && onPull || null" @changestate="state = $event.state">
      <!-- Show this on iOS -->
      <v-ons-icon v-if="!md" size="22px" class="pull-hook-spinner" :icon="state === 'action' ? 'fa-spinner' : 'fa-arrow-down'" :rotate="state === 'preaction' && 180" :spin="state === 'action'"> </v-ons-icon>
      <!-- Show this on Material Design -->
      <div v-else class="pull-hook-progress">
        <v-ons-progress-circular :value="ratio * 100" :indeterminate="state === 'action'" :style="{ transform: `rotate(${ratio}turn)` }"> </v-ons-progress-circular>
      </div>
    </v-ons-pull-hook>

    <div style="text-align: center; margin: 40px; color: #666" v-if="isLoading">
      <p>
        <v-ons-progress-circular indeterminate></v-ons-progress-circular>
      </p>
    </div>

    <v-ons-list-item v-show="!isLoading">
      <v-ons-row>
        <v-ons-col>

          <v-ons-card>
            <div class="title">Hoy</div>
            <div class="content">
              <v-ons-list>
                <item-partido v-for="item in list" :key="item._id" :partido="item"></item-partido>
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
import { createNamespacedHelpers } from 'vuex';

import ItemPartido from "./itemPartido";

const { mapGetters, mapActions } = createNamespacedHelpers('fixture');

export default {
  name: 'TabPartidosActivos',
  components: {
    ItemPartido
  },
  data() {
    return {
      state: 'initial',
      ratio: 0,
    };
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'page',
      'tab'
    ]),
    ...mapGetters({
      list: 'listActivos'
    })
  },
  methods: {
    ...mapActions({
      loadPartidos: 'loadListPartidosActivos',
      cleanList: 'cleanList'
    }),
    loadMore(done) {
      const page = this.page === 0 ? 1 : this.page;
      this.loadPartidos({ page })
        .finally(() => {
          done();
        });
    },
    onPull(ratio) {
      this.ratio = ratio;
    },
    onAction(done) {
      setTimeout(() => {
        this.loadPartidos({ page: 0 })
          .finally(() => {
            done();
          });
      }, 1500);
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.loadPartidos({ page: 0 });
    });
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

.pull-hook-progress {
  background-color: white;
  width: 32px;
  height: 32px;
  margin: 30px auto 0;
  border-radius: 100%;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: inline-block;
  line-height: 0px;
}

.pull-hook-progress .progress-circular {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
}

.pull-hook-progress .progress-circular__primary {
  transition: stroke-dashoffset 0s;
}

.pull-hook-spinner {
  color: #666;
  transition: transform .25s ease-in-out;
}
</style>
