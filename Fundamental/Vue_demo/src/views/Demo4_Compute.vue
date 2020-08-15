<template>
  <div class="demo4">
    <h1>Demo4 : Compute</h1>

    <h2>{{ firstname }}</h2>
    <h2>{{ lastname }}</h2>
    <h2>{{ fullname }}</h2>

    <h3>On comupete {{ getrandomno }}</h3>
    <h3>On comupete {{ getrandomno }}</h3>
    <h3>On comupete {{ getrandomno }}</h3>

    <h3>On Method {{ getrandomno1() }}</h3>
    <h3>On Method {{ getrandomno1() }}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo4",
  methods: {
    getrandomno1: function() {
      return Math.random();
    }
  },
  data() {
    return {
      firstname: "Natthanan",
      lastname: "Bhukan"
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandomno() {
      return Math.random();
    }
  }
};
</script>

<style></style>
