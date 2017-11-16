<template lang="pug">
  v-form
    component(v-for="(item,i) in schema.fields" :ket="i"
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
      v-validate="item.validate"

      :items="item.values"
      @change="$v.checkbox.$touch()"
      )
    //v-checkbox(
      :error-messages="checkboxErrors"
      @blur="$v.checkbox.$touch()"
      )
    pre {{model}}
</template>

<script>
export default {
  name: 'vuetify-form',
  props: {},
  data() {
    return {
      model: {
        id: 1,
        name: "John Doe",
        email: "email@admin",
        password: "J0hnD03!x4",
        skills: ["Javascript", "VueJS"],
        email: "john.doe@gmail.com",
        status: true
      },
      schema: {
        fields: [{
          type: "input",
          inputType: "text",
          label: "ID (disabled text field)",
          model: "id",
          counter:10,
          readonly: true,
          disabled: true
      }, {
          type: "input",
          inputType: "email",
          label: "Email",
          model: "email",
          placeholder: "User's e-mail address",
          rules: [
            (v) => !!v || 'E-mail is required',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
          featured: true,
          required: true
      }, {
          type: "input",
          inputType: "text",
          label: "Name",
          model: "name",
          placeholder: "Your name",
          rules: [
            (v) => !!v || 'Name is required',
            (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
          featured: true,
          required: true
      }, {
          type: "input",
          inputType: "password",
          label: "Password",
          model: "password",
          min: 6,
          required: true,
          hint: "Minimum 6 characters",
          validator: /./
      }, {
          type: "select",
          label: "Skills",
          model: "skills",
          rules: [v => !!v || 'Item is required'],
          values: ["Javascript", "VueJS", "CSS3", "HTML5"]
      }, {
          type: "checkbox",
          label: "Status",
          model: "status",
          default: true
      }]
      }
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
