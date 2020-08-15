<template>
  <v-container id="register">
    <v-row align="center" justify="center" class="pt-10">
      <v-card style="width:400px;">
        <v-img
          class="white--text align-end"
          src="../assets/login_header.jpg"
          height="200px"
        >
          <v-card-title>Register</v-card-title>
        </v-img>

        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username field -->
            <v-text-field
              label="Username"
              v-model="account.username"
              required
              :rules="usernameRule"
            />

            <!-- Password field -->
            <v-text-field
              label="Password"
              v-model="account.password"
              min="8"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'password' : 'text'"
              counter
              required
              :rules="passwordRule"
            />

            <!-- Buttons  -->
            <v-layout justify-space-between class="mt-5">
              <v-btn text small color="error" @click="$router.go(-1)">
                Cancel
              </v-btn>
              <v-btn type="submit" color="success">
                Confirm
              </v-btn>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import api from "../service/api";
export default {
  name: "Register",
  props: [],
  mounted() {},
  data() {
    return {
      account: {
        username: "",
        password: ""
      },
      usernameRule: [rule => !!rule || "Username is required"],
      passwordRule: [
        rule1 => !!rule1 || "Password is required",
        rule2 =>
          !!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(rule2) ||
          "Minimum eight characters, at least one letter and one number"
      ],
      isShowPassword: true
    };
  },
  methods: {
    async submit() {
      await api.register(this.account);
    }
  },
  computed: {}
};
</script>

<style></style>
