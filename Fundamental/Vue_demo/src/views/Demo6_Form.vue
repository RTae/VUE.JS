<template>
  <div class="demo6">
    <h1>Demo5 : Form & v-model</h1>
    <div>
      <form v-on:submit.prevent="submit">
        <!-- First Name -->
        <div>
          <label for="first_name">Firstname: </label>
          <input
            type="text"
            name="first_name"
            v-model.trim="applicant.first_name"
          />
        </div>
        <!-- Last Name -->
        <div>
          <label for="last_name">Lastname: </label>
          <input
            type="text"
            name="last_name"
            v-model.lazy="applicant.last_name"
          />
        </div>
        <!-- Sex -->
        <div>
          <label for="sex">Male</label>
          <input type="radio" name="sex" value="male" v-model="applicant.sex" />
          <label for="sex">Female</label>
          <input
            type="radio"
            name="sex"
            value="female"
            v-model="applicant.sex"
          />
        </div>
        <!-- Age -->
        <div>
          <label for="age">Age: </label>
          <input type="number" v-model.number="applicant.age" />
        </div>
        <!-- Courses -->
        <div>
          <select name="courses" v-model="applicant.course">
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vuejs">VueJs</option>
          </select>
        </div>
        <button type="button" @click.exact="clear" @click.alt="useDefault">
          Clear
        </button>
        <button type="submit">Sumbit</button>
      </form>
      <div style="margin-top: 16px; color: red;">
        #Spy {{ JSON.stringify(applicant) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo6",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "VueJs"
      }
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: ""
      };
    },
    useDefault() {
      this.applicant = {
        first_name: "UNKNOW",
        last_name: "UNKNOW",
        sex: "male",
        age: 10,
        course: "react"
      };
    }
  }
};
</script>

<style></style>
