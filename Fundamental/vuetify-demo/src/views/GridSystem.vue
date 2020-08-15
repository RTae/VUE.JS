<template>
  <div id="gridsystem">
    <v-container fluid>
      <div v-if="false"></div>
      <h1>Grid system</h1>
      <!-- add "no-gutters" to not margin between component-->
      <v-row>
        <v-col cols="6" md="4">
          <v-btn outlined color="success" block>1</v-btn>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn outlined color="success" block>2</v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-btn outlined color="success" block>3</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "GridSystem"
};
</script>

<style></style>
