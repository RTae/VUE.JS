<template>
  <v-container fluid>
    <div id="flex">
      <h1>Flex</h1>
    </div>
    <v-row
      align="center"
      justify="center"
      style="height: 100px; background-color:#000990;"
    >
      <v-col cols="2">
        <v-btn block color="success">1</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn block color="success">2</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Flex"
};
</script>

<style></style>
