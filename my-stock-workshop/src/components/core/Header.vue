<template>
  <div id="header">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      app
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        Coffee shop V{{ version }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span>{{ $store.getters["username"] | capitalize }}</span>
      <v-btn icon @click="onClicklogOut">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onClicklogOut() {
      this.$store.dispatch({
        type: "doLogout"
      });
    }
  },
  computed: {
    version() {
      return process.env.VUE_APP_IS_VERSION;
    }
  }
};
</script>

<style></style>
