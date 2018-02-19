<template>
<v-ons-page>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">Form input</div>
  </v-ons-toolbar>

  <ons-list>
    <ons-list-item>
      <label class="center" for="switch1">
          Switch ({{ switchOn ? 'on' : 'off' }})
        </label>
      <div class="right">
        <v-ons-switch input-id="switch1" v-model="switchOn">
        </v-ons-switch>
      </div>
    </ons-list-item>

    <ons-list-item>
      <label class="center" for="switch2">
          {{ switchOn ? 'Enabled switch' : 'Disabled switch' }}
        </label>
      <div class="right">
        <v-ons-switch input-id="switch2" :disabled="!switchOn">
        </v-ons-switch>
      </div>
    </ons-list-item>
  </ons-list>

  <p>
    <v-ons-search-input placeholder="Search something"></v-ons-search-input>
  </p>

  <v-ons-list>
    <v-ons-list-header>
      Text input
    </v-ons-list-header>
    <v-ons-list-item>
      <div class="center">
        <v-ons-input placeholder="Input your name" float v-model="name">
        </v-ons-input>
      </div>
    </v-ons-list-item>
    <v-ons-list-item>
      <div class="right">
        Hello {{ name || 'anonymous' }}!
      </div>
    </v-ons-list-item>

    <v-ons-list-header>
      Radio buttons
    </v-ons-list-header>
    <v-ons-list-item v-for="(vegetable, $index) in vegetables" :key="vegetable" tappable>
      <label class="left">
          <v-ons-radio
            :input-id="'radio-' + $index"
            :value="vegetable"
            v-model=" selectedVegetable"
          >
          </v-ons-radio>
        </label>
      <label :for="'radio-' + $index" class="center">
          {{ vegetable }}
        </label>
    </v-ons-list-item>
    <v-ons-list-item>
      <div class="center">
        I love {{ selectedVegetable }}!
      </div>
    </v-ons-list-item>

    <v-ons-list-header>
      Checkboxes - {{checkedColors}}
    </v-ons-list-header>
    <v-ons-list-item v-for="(color, $index) in colors" :key="color" tappable>
      <label class="left">
          <v-ons-checkbox
            :input-id="'checkbox-' + $index"
            :value="color"
            v-model="checkedColors"
          >
          </v-ons-checkbox>
        </label>
      <label class="center" :for="'checkbox-' + $index">
          {{ color }}
        </label>
    </v-ons-list-item>

  </v-ons-list>
</v-ons-page>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      switchOn: true,
      name: '',
      vegetables: ['Apples', 'Bananas', 'Oranges'],
      selectedVegetable: 'Bananas',
      colors: ['Red', 'Green', 'Blue'],
      checkedColors: ['Green', 'Blue']
    };
  }
};
</script>
