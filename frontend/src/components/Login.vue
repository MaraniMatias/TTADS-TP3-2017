<template lang="pug">
  div
    h1 {{ msg }}
    custom-form(@submit="submit" :model="model" :fields="fields")
      template(slot="fields")
        v-select(
          v-bind:items="items"
          v-model="select"
          label="Select"
          single-line
          item-text="state"
          item-value="abbr"
          return-object
          :hint="`${select.state}, ${select.abbr}`"
          persistent-hint
          )
      template(slot="actions")
        v-btn.primary(@click="btnClick") submit
        v-btn(@click="") clear
</template>

<script>
import from from './vuetify-form.vue';

export default {
  name: 'home',
  components: {
    'custom-form': from
  },
  data() {
    return {
      select: { state: 'Florida', abbr: 'FL' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' }
        ],
      msg: 'Welcome to Your Vue.js App',
      model: {
        id: 1,
        name: "John Doe",
        email: "email@admin",
        password: "J0hnD03!x4",
        skills: ["Javascript", "VueJS"],
        email: "john.doe@gmail.com",
        status: true
      },
      fields: [{
        type: "input",
        inputType: "text",
        label: "ID (disabled text field)",
        model: "id",
        counter: 10,
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
        required: true,
        hint: "Minimum 6 characters",
        validator: /\w{6}/
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
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
