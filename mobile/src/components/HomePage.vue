<template>
<v-ons-page>
  <v-ons-toolbar class="home-toolbar">
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ msg }}</div>
  </v-ons-toolbar>

  <p>
    <v-ons-button @click="goTo('pullhook')">PullHook</v-ons-button>
    <v-ons-input v-model="msg"></v-ons-input>
  </p>

  <div class="header">
    <img src="../assets/logo.png">
  </div>


  <v-ons-button @click="$ons.openActionSheet({buttons:['label1', 'label2', 'label3'], title: 'Lorem ipsum', cancelable: true, destructive: 1})">
    Dynamic action sheet
  </v-ons-button>

  <v-ons-button @click="actionSheetVisible = true">
    Static action sheet
  </v-ons-button>
  <div>Static sheet visible? {{actionSheetVisible}}</div>

  <v-ons-action-sheet :visible.sync="actionSheetVisible" cancelable title="Description">
    <v-ons-action-sheet-button icon="md-square-o">Label 1</v-ons-action-sheet-button>
    <v-ons-action-sheet-button icon="md-square-o" modifier="destructive">Label 2</v-ons-action-sheet-button>
    <v-ons-action-sheet-button icon="md-square-o">Label 3</v-ons-action-sheet-button>
  </v-ons-action-sheet>

  <v-ons-list-title>Vue.js Ecosystem</v-ons-list-title>
  <v-ons-row>
    <v-ons-col>
      <v-ons-card @click="goTo('http://router.vuejs.org/')">vue-router</v-ons-card>
    </v-ons-col>
    <v-ons-col>
      <v-ons-card @click="goTo('http://vuex.vuejs.org/')">vuex</v-ons-card>
    </v-ons-col>
  </v-ons-row>
  <v-ons-row>
    <v-ons-col>
      <v-ons-card @click="goTo('http://vue-loader.vuejs.org/')">vue-loader</v-ons-card>
    </v-ons-col>
    <v-ons-col>
      <v-ons-card @click="goTo('https://github.com/vuejs/awesome-vue')">awesome-vue</v-ons-card>
    </v-ons-col>
  </v-ons-row>

  <v-ons-speed-dial position="bottom right" direction="up" :visible="spdVisible" :open.sync="spdOpen">
    <v-ons-fab>
      <v-ons-icon icon="md-face"></v-ons-icon>
    </v-ons-fab>

    <v-ons-speed-dial-item v-for="(icon, name) in shareItems" @click="$ons.notification.confirm(`Share on ${name}?`)">
      <v-ons-icon :icon="icon"></v-ons-icon>
    </v-ons-speed-dial-item>

  </v-ons-speed-dial>

  <ons-select>
    <option>Opt 1</option>
    <option>Opt 2</option>
  </ons-select>

  <ons-select class="select">
    <select class="select-input">
    <option>Opt 1</option>
    <option>Opt 2</option>
  </select>
  </ons-select>

</v-ons-page>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'TTADS-3',
      spdVisible: false,
      spdOpen: true,
      actionSheetVisible: false,
      shareItems: {
        Twitter: 'md-twitter',
        Facebook: 'md-facebook',
        Google: 'md-google-plus'
      },
      essentialLinks: [
        {
          label: 'Core Docs',
          link: 'https://vuejs.org',
          icon: 'fa-book',
        },
        {
          label: 'Docs for this template',
          link: 'http://vuejs-templates.github.io/webpack/',
          icon: 'fa-file-text',
        },
      ],
    };
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title {
  text-transform: none;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item,
ons-card {
  cursor: pointer;
}
</style>
