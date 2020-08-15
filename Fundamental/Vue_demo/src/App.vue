<template>
  <div id="app">
    <Header />
    <Content />
    <Footer @onClock="onClock" title="Copyright 2020 by Tae" color="black" />
    <span class="clock">{{ time }}</span>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Content from "@/components/layout/Content";
import momnet from "moment";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Content
  },
  methods: {
    onClock(value) {
      this.time = momnet(value).format("MM/DD/YYYY hh:mm:ss");
    }
  },
  data() {
    return {
      time: ""
    };
  }
};
</script>

<style scoped>
.clock {
  font-size: 15px;
  padding: 15px;
}
</style>
