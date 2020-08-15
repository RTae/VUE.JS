<template>
  <div id="demo9">
    <h1>Demo9 For loop</h1>
    <ul>
      <li v-for="(item, index) in ['Angular', 'VueJs', 'React']" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
    <!-- Destructuring -->
    <ul>
      <li v-for="({ title, price }, index) in mycourses" :key="index">
        {{ title }}, Price {{ price }}
      </li>
    </ul>
    <ul>
      <li v-for="({ title, price }, index) in mycourses" :key="index">
        {{ title }}, Price {{ price }}
      </li>
    </ul>
    <hr />
    <input type="text" placeholder="Title" v-model="courses.title" />
    <br />
    <input type="number" placeholder="Price" v-model.number="courses.price" />
    <br />
    <button @click="addCourse">Submit</button>
    <ul>
      <li v-for="(courses, index) in myCoursesList" :key="index">
        {{ courses.title }}, Price: {{ courses.price }}
        <button @click="removeCourse(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo9",
  methods: {
    addCourse() {
      this.myCoursesList.push(this.courses);
      this.courses = {
        title: "",
        price: 0
      };
    },
    removeCourse(index) {
      this.myCoursesList.splice(index, 1);
    }
  },
  data() {
    return {
      mycourses: [
        { title: "IOS", price: 12 },
        { title: "Android", price: 14 },
        { title: "Flutter", price: 15 }
      ],
      myCoursesList: [],
      courses: {
        title: "",
        price: 0
      }
    };
  }
};
</script>

<style></style>
