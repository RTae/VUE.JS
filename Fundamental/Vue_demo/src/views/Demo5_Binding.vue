<template>
  <div class="demo5">
    <h1>Demo5 : Binding</h1>
    <img v-bind:src="imageUrl" v-bind:height="size" />
    <div>
      <input type="text" placeholder="Enter a size here" v-model="size" />
    </div>
    <br />
    <a v-bind:href="link">My website</a>
    <br />
    <a :href="link">My website</a>
    <div :class="[false ? error : '', important]">Codemobile</div>
    <div :style="{ color, fontSize }">Binding Style</div>
    <div :style="isActive ? styleObj : ''">Binding Style object</div>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: "Demo5",
  data() {
    return {
      imageUrl:
        "https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/116515928_917742585377576_2423648241695844047_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_eui2=AeGX2TtSs0bd7qFmFyftbavtrZU7GDGxy6atlTsYMbHLpvwKZBUgUzV4_55Sn4qRNg8CmLXyyTWt0E8X3SqJE6NH&_nc_ohc=CDOtFt1Nn_cAX8hWWJr&_nc_ht=scontent.fbkk5-1.fna&oh=1010c2b2144a9d67eae308fd75d555a3&oe=5F4C6C17",
      size: 100,
      link: "http://codemobile.com",
      error: "errorClass",
      important: "important",
      color: "green",
      fontSize: "30px",
      styleObj: {
        backgroundColor: "yellow",
        color: "green"
      },
      isActive: false
    };
  }
};
</script>

<style>
.errorClass {
  background: red;
  color: white;
}
.important {
  font-weight: 900;
}
</style>
