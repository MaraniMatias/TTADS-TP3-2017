<template>
<v-ons-list-item tappable modifier="longdivider" @click="itemAction()">
  <div class="center">{{equipo.nombre}}</div>
</v-ons-list-item>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ItemEquipo',
  props: {
    equipo: {
      type: Object,
      required: true
    },
    setEquipo: {
      type: [String, Boolean],
      default: false,
      // https://vuejs.org/v2/guide/components.html#Prop-Validation
      validator(value) {
        let rta = false;
        if (typeof value === 'boolean') {
          rta = value === false;
        }
        if (typeof value === 'string') {
          rta = (value === 'equipoA' || value === 'equipoB');
        }
        return rta;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations('altaPartido', {
      setPartido: 'set_equipo'
    }),
    itemAction() {
      const self = this;
      if (this.setEquipo) {
        this.setPartido({
          set: this.setEquipo,
          equipo: this.equipo,
          cb(err) {
            if (err) {
              self.$ons.notification.toast('Este equipo ya fue agregado', {
                timeout: 1000
              });
            } else {
              self.$router.push({ name: 'altaPartido' });
            }
          }
        });
      } else {
        // goToProfile
        this.$router.push({ name: 'equipo', params: { id: this.equipo._id } });
      }
    },
  }
};
</script>

<style scoped>

</style>
