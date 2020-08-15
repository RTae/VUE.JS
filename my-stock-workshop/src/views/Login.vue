<template>
  <v-container id="login">
    <v-row align="center" justify="center" class="pt-10">
      <v-card style="width:400px;">
        <v-img
          class="white--text align-end"
          src="../assets/login_header.jpg"
          height="200px"
        >
          <v-card-title>Login</v-card-title>
        </v-img>

        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username field -->
            <v-text-field
              label="Username"
              v-model="account.username"
              required
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
            />

            <!-- Buttons  -->
            <v-layout justify-space-between class="mt-5">
              <v-btn text small @click="$router.push('/register')">
                Register
              </v-btn>
              <v-btn type="submit" color="success">
                Login
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
  name: "Login",
  data() {
    return {
      isShowPassword: true,
      account: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    if (api.isLoggedIn()) {
      this.$router.push("/stock");
    }
  },
  methods: {
    submit() {
      this.$router.push("/stock");
      this.$store.dispatch({
        type: "doLogin",
        username: this.account.username,
        password: this.account.password
      });
    }
  }
};
</script>

<style></style>
