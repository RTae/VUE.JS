<template>
  <div class="demo3">
    <h1>Demo3 : Data and Variable</h1>
    <button @click="count++">Count++</button>
    <button @click="count = 0">Reset</button>
    <span>{{ count }}</span>
    <div>{{ message }}</div>
    <div>{{ isLogin }}</div>
    <input type="text" placeholder="Enter a message" v-model="message" />
    <h2 v-if="message == 'RTAE'">Yahooo</h2>
    <div>{{ account.username }} {{ account.password }}</div>
    <div>{{ courses }}</div>
    <ul>
      <li class="content" v-for="(item, index) in courses" :key="index">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
    <span class="title">5555</span>
  </div>
</template>

<script>
export default {
  name: "Demo3",
  mounted() {
    this.message = "Welcome to Code Mobile";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogin: false,
      account: {
        username: "admin",
        password: "1234"
      },
      courses: ["Angular", "VueJs", "ReactJs", "Fluter", "UXUI"]
    };
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
  color: salmon;
}
</style>
