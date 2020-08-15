<template>
  <div id="demo7">
    <h1>Demo7 V - slot</h1>
    <Clock>
      <span style="color: red;">เวลาปัจจุบัน</span>
    </Clock>
    <Clock>
      <span style="color: blue;">Time</span>
    </Clock>
    <!-- Using fallback (default) content -->
    <Clock />
    <Clock>
      <span style="color:orange;">เวลาปัจจุบัน</span>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <template v-slot:footer>
        <h1>Footer</h1>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Demo7",
  components: {
    Clock
  }
};
</script>

<style></style>
