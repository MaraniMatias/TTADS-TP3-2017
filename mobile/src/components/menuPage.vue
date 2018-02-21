<template>
<v-ons-page>
  <v-ons-toolbar modifier="transparent">
    <h1 class="center">Handball</h1>
  </v-ons-toolbar>
  <div class="header">
    <img src="../assets/logo.png">
  </div>
  <v-ons-list>
    <v-ons-list-item modifier="chevron" v-for="item in essentialLinks" @click="goTo(item.link)" :key="item.link">
      <div class="left">
        <v-ons-icon fixed-width :icon="item.icon"></v-ons-icon>
      </div>
      <div class="center">{{ item.label }}</div>
    </v-ons-list-item>
  </v-ons-list>
</v-ons-page>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      essentialLinks: [
        {
          label: 'Home',
          link: 'home',
          icon: 'fa-book',
        },
        {
          label: 'Dialogs',
          link: 'dialogs',
          icon: 'fa-commenting',
        },
        {
          label: 'Forum',
          link: 'form',
          icon: 'ion-chatboxes',
        },
        {
          label: 'Equipos',
          link: 'listEquipoPage',
          icon: 'fa-twitter',
        },
      ],
    };
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
      // window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-title {
  text-transform: none;
}

ons-list-item {
  cursor: pointer;
}

h1 {
  margin: 0px;
}
</style>
