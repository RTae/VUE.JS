<template>
  <div id="header">
    <ul>
      <li>
        <button>
          <router-link to="/">Home</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo1">Demo1</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo2">Demo2</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo3">Demo3</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo4">Demo4</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo5">Demo5</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo6">Demo6</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo7">Demo7</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo8">Demo8</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo9">Demo9</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/demo10">Demo10</router-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 2px;
}
</style>
