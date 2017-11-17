<template lang="pug">
  v-form(@submit.prevent="submit()")
    template(v-for="(item,i) in fields" :ket="i")
      component(
        v-bind:is="item.type=='input'?'v-text-field':'v-'+item.type"
        v-model="model[item.model]"
        :rules="item.rules"
        :type="item.inputType"
        :label="item.label"
        :readonly="item.readonly"
        :required="item.required"
        :disabled="item.disabled"
        :counter="item.counter"
        :placeholder="item.placeholder"
        :v-validate="item.validate"

        :items="item.values"
        )
    slot(name="fields")
    slot(name="actions")
    pre {{model}}
</template>

<script>
export default {
  name: 'vuetify-form',
  props: {
    model: {
      required: true
    },
    fields:{
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    submit() {
      this.$emit('submit');
    }
  }
}
</script>

<style scoped>

</style>
