<template>
  <div id="footer">
    <span :style="{ color }" class="footer">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    setInterval(() => {
      this.$emit("onClock", Date());
    }, 100);
  },
  props: ["title", "color"]
};
</script>

<style scoped>
.footer {
  font-size: 15px;
  color: black;
  padding: 15px;
}
</style>
