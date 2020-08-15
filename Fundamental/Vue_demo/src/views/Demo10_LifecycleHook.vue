<template>
  <div id="demo10">
    <h1>Demo10 Lift cycle hook</h1>
    <span>{{ counter }}</span>
    <br />
    <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
  name: "Demo10",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add() {
      this.counter++;
    }
  },
  beforeCreate() {
    console.log("Before create");
  },
  created() {
    console.log("Create");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before update");
  },
  updated() {
    console.log("Update");
  },
  beforeDestroy() {
    console.log("Before destroy");
  },
  destroyed() {
    console.log("Destroy");
  }
};
</script>

<style></style>
