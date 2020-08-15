<template>
  <div id="breakpoint">
    <v-container>
      <v-btn color="success" class="hidden-md-and-up">
        Only show in sn and extra
      </v-btn>
      <br />
      <v-btn color="success" class="hidden-md-only">Hidden only md</v-btn>
      <v-btn color="success" class="hidden-md-down">
        Hidden when smaller than md
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Breakpoint"
};
</script>

<style></style>
