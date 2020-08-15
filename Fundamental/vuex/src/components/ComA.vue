<template>
  <div id="coma">
    <h2>{{ $store.getters.getCount }}</h2>
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  name: "ComA",
  methods: {
    add() {
      this.$store.dispatch("addAction");
    },
    minus() {
      this.$store.dispatch("minusAction");
    }
  }
};
</script>

<style></style>
