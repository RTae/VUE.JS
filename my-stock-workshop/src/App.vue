<template>
  <div id="app">
    <v-app>
      <Header v-if="$store.state.isLogged" />
      <Menu v-if="$store.state.isLogged" />
      <Content />
    </v-app>
  </div>
</template>

<script>
import Header from "./components/core/Header";
import Menu from "./components/core/Menu";
import Content from "./components/core/Content";

export default {
  name: "App",
  components: {
    Content,
    Header,
    Menu
  },
  mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
  }
};
</script>

<style></style>
