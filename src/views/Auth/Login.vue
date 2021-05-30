<template>
  <b-container>
    <div class="col-md-6 m-auto">
      <b-card class="my-5" header="Чтобы войти в Личный кабинет нужно ввести Логин и пароль:">
        <b-list-group>
          <b-list-group-item>admin</b-list-group-item>
          <b-list-group-item>123456</b-list-group-item>
        </b-list-group>
      </b-card>
      <b-form @submit="handleSubmit">
        <b-form-group
          id="input-group-1"
          label="Введите ваш Логин:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Login"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Введите пароль:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Введите пароль"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Запомнить меня</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Войти</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        checked: [],
      },
    };
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
      // this.$store.dispatch('loginUser');
    },
  },
  computed: {
  },
  created() {
  },
};
</script>
