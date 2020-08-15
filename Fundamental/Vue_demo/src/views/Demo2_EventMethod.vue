<template>
  <div class="demo2">
    <h1>Demo2 : Event Method</h1>
    <button v-on:click="clickMe">ClickMe1</button>
    <button v-on:click="clickMe2('Welcome to VueJs')">clickMe2</button>
    <button @click="clickMe2('Welcome to CodeMobile')">ClickMe3</button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      console.log("Initialization");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    }
  }
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
