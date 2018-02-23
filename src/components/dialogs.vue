<template>
<v-ons-page>
  <v-ons-toolbar class="home-toolbar">
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Dialogs</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-header>Notifications</v-ons-list-header>
    <v-ons-list-item tappable @click="$ons.notification.alert('Hello, world!')">
      <div class="center">
        Alert
      </div>
    </v-ons-list-item>
    <v-ons-list-item tappable @click="$ons.notification.confirm('Are you ready?')">
      <div class="center">
        Confirmation
      </div>
    </v-ons-list-item>
    <v-ons-list-item tappable @click="$ons.notification.prompt('What is your name?')">
      <div class="center">
        Prompt
      </div>
    </v-ons-list-item>
    <v-ons-list-item tappable @click="$ons.notification.toast('Hello, world!', {timeout: 2000})">
      <div class="center">
        Toast
      </div>
    </v-ons-list-item>

    <v-ons-list-header>Components</v-ons-list-header>
    <v-ons-list-item tappable @click="dialogVisible = true">
      <div class="center">
        Simple Dialog
      </div>
    </v-ons-list-item>

    <v-ons-list-item tappable @click="alertDialog1Visible = true">
      <div class="center">
        Alert Dialog (slots)
      </div>
    </v-ons-list-item>

    <v-ons-list-item tappable @click="alertDialog2Visible = true">
      <div class="center">
        Alert Dialog (props)
      </div>
    </v-ons-list-item>

  </v-ons-list>

  <v-ons-dialog cancelable :visible.sync="dialogVisible">
    <p style="text-align: center">Lorem ipsum</p>
  </v-ons-dialog>

  <v-ons-alert-dialog modifier="rowfooter" :visible.sync="alertDialog1Visible">
    <span slot="title">Title slots</span> Lorem ipsum
  </v-ons-alert-dialog>

</v-ons-page>
</template>

<script>
export default {
  name: 'dialogs',
  data() {
    return {
      dialogVisible: false,
      alertDialog1Visible: false,
      alertDialog2Visible: false,
    };
  }
};
</script>
