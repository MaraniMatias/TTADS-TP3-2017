<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-card-title(primary-title)
            v-container(grid-list-md text-xs-center)
              v-layout(row wrap)
                v-flex(xs4)
                  v-avatar
                    img(src='https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg')
                v-flex(xs4)
                  h1.text-md-center 30 - 15
                v-flex(xs4)
                  v-avatar
                    img(src='https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg')
              v-layout(row wrap)
                v-flex(xs4)
                  p.text-md-center Equipo 1
                v-flex(xs4)
                  p.headline.text-md-center 00 : 00
                v-flex(xs4)
                  p.text-md-center Equipo 2
          v-card-actions
            //- v-btn(flat) Compartir
            v-btn(flat color='primary') Detalles Completos
            v-spacer
            v-btn(icon @click.native='show = !show' alt="Ver Eventos")
              v-icon {{ show ? &apos;keyboard_arrow_down&apos; : &apos;keyboard_arrow_up&apos; }}
          v-slide-y-transition
            div(v-show='show')
              v-list
                v-list-group(v-for='item in items' :value='item.active' v-bind:key='item.title')
                  v-list-tile(slot='item' @click='')
                    v-list-tile-action
                      v-icon {{ item.action }}
                    v-list-tile-content
                      v-list-tile-title {{ item.title }}
                    v-list-tile-action
                      v-icon keyboard_arrow_down
                  v-list-tile(v-for='subItem in item.items' v-bind:key='subItem.title' @click='')
                    v-list-tile-content
                      v-list-tile-title {{ subItem.title }}
                    v-list-tile-action
                      v-icon {{ subItem.action }}
</template>

<script>
export default {
  name: 'partido-panel',
  components: {},
  data() {
    return {
      show: false,
      items: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' }
            ]
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' }
            ]
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
