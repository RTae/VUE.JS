<template>
  <div id="button">
    <v-container>
      <h1 class="text-uppercase">Button</h1>
      <v-btn class="pink white--text mr-5">color</v-btn>
      <v-btn depressed class="pink white--text mr-5">no shadow</v-btn>
      <v-btn small class="pink white--text mr-5">small</v-btn>
      <v-btn fab class="pink white--text mr-5">circle</v-btn>
      <v-btn outlined class="mr-5">outline</v-btn>
      <v-btn class="mr-5" color="success" dark>
        <v-icon size="30" centered large>email</v-icon>
        <span>EMAIL</span>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style></style>
