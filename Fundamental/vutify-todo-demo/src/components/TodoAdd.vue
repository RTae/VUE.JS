<template>
  <div id="todoadd">
    <v-container>
      <!-- Todo-add -->
      <v-row>
        <v-col cols="10">
          <v-text-field
            name="name"
            label="Task"
            id="id"
            v-model="taskTextField"
            @keyup.enter="addTask"
          />
        </v-col>
        <v-col cols="2">
          <v-btn block color="success" @click="addTask">Add</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
  methods: {
    addTask() {
      let task = {
        id: Math.random(),
        title: this.taskTextField,
        completed: false
      };
      this.$emit("onSubmit", task);
      this.taskTextField = "";
    }
  },
  data() {
    return {
      taskTextField: ""
    };
  }
};
</script>

<style></style>
