<template>
  <div id="app" style="text-align:center">
    <h1>Vuex state management</h1>
    <h1>{{ $store.state.count }}</h1>
    <hr />
    <br />
    <ComA />
    <hr />
    <br />
    <ComB />
  </div>
</template>

<script>
import ComA from "@/components/ComA.vue";
import ComB from "@/components/ComB.vue";

export default {
  name: "App",
  components: {
    ComA,
    ComB
  }
};
</script>

<style></style>
