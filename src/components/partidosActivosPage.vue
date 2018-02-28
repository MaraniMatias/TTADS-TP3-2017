<template>
<v-ons-page :infinite-scroll="loadMore">
  <v-ons-list class="bg-trans">
    <pull-hook :on-action="onAction"></pull-hook>

    <div style="text-align: center; margin: 40px; color: #666" v-if="isLoading">
      <p>
        <v-ons-progress-circular indeterminate></v-ons-progress-circular>
      </p>
    </div>

    <v-ons-list-title>List Title</v-ons-list-title>
    <template v-show="!isLoading">
      <v-ons-list modifier="inset">
        <v-ons-list-header>Torneo name</v-ons-list-header>
        <item-partido v-for="item in list" :key="item._id" :partido="item"></item-partido>
      </v-ons-list>
    </template>

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
      setTimeout(() => {
        this.loadPartidos()
          .finally(() => {
            done();
          });
      }, 1000);
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

.card {
  padding: 10px;
}

ons-list.bg-trans {
  background-color: transparent;
}
</style>
