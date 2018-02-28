<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-list>
    <pull-hook :on-action="onAction"></pull-hook>

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
import PullHook from "./pull-hook";

const { mapGetters, mapActions } = createNamespacedHelpers('fixture');

export default {
  name: 'TabPartidosActivos',
  components: {
    ItemPartido,
    PullHook
  },
  data() {
    return {};
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
    onAction(done) {
      // setTimeout(() => {
      this.loadPartidos({ page: 0 })
        .finally(() => {
          done();
        });
      // }, 1500);
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
</style>
