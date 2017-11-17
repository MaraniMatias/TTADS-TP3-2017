<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap)
      v-flex(xs12 lg5)
        v-card
          v-expansion-panel(popout)
            v-expansion-panel-content(v-for='(item,i) in 5' :key='i')
              div(slot='header') Item
              v-card
                v-card-text.grey.lighten-3
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      v-flex(xs12 lg5 offset-lg2)
        v-card
          v-expansion-panel(inset)
            v-expansion-panel-content(v-for='(item,i) in 5', :key='i')
              div(slot='header') Item
              v-card
                v-card-text.grey.lighten-3
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    v-layout(row wrap)
      v-flex(xs12)
        v-data-table.elevation-1(v-bind:headers='headers' :items='items')
          template(slot='headerCell' slot-scope='props')
            v-tooltip(bottom='')
              span(slot='activator') {{ props.header.text }}
              span {{ props.header.text }}
          template(slot='items' slot-scope='props')
            td {{ props.item.name }}
            td.text-xs-right {{ props.item.calories }}
            td.text-xs-right {{ props.item.fat }}
            td.text-xs-right {{ props.item.sodium }}
            td.text-xs-right {{ props.item.calcium }}
            td.text-xs-right {{ props.item.iron }}
</template>

<script>

export default {
  name: 'partido-list',
  components: {
  },
  data() {
    return {
    headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Calcium (%)', value: 'calcium' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
          }
        ]
      }
  },
  methods: {
    btnClick() {
      console.log("btn");
    },
    submit() {
      console.log("Home");
    }
  }
}
</script>

<style scoped>
</style>
