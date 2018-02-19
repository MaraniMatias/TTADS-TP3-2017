<template>
  <v-ons-page>
    <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
      <div class="center">Pull Hook</div>
    </v-ons-toolbar>

    <v-ons-pull-hook
      :action="loadItem"
      @changestate="state = $event.state"
    >
      <span v-show="state === 'initial'"> Pull to refresh </span>
      <span v-show="state === 'preaction'"> Release </span>
      <span v-show="state === 'action'"> Loading... </span>
    </v-ons-pull-hook>

    <v-ons-list>
      <v-ons-list-item v-for="item in items">
        {{item}}
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'PullHook',
  data() {
    return {
      state: 'initial',
      items: [1, 2, 3]
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
