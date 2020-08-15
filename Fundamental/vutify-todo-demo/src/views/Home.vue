<template>
  <div id="home">
    <v-container>
      <TodoAdd @onSubmit="addTask" />
      <TodoList @onRemove="removeTask" :todos="todos | reversed" />
      <v-row class="d-flex flex-row justify-content-center align-center">
        <v-img
          class="mt-10"
          maxHeight="200"
          src="../assets/logo.png"
          contain
          alt="pic" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import TodoAdd from "../components/TodoAdd.vue";
import axios from "axios";

export default {
  name: "Home",
  filters: {
    reversed(value) {
      return value.slice().reverse();
    }
  },
  components: {
    TodoList,
    TodoAdd
  },
  computed: {
    reversedTodo() {
      return this.todos.slice().reverse();
    }
  },
  async mounted() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.todos = result.data;
  },
  data() {
    return {
      taskTextField: "",
      todos: [],
      todos_mockup: [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: false },
        { id: 3, title: "Task 3", completed: true }
      ]
    };
  },
  methods: {
    async addTask(task) {
      let result = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        task
      );
      this.todos.push(result.data);
    },
    removeTask(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(result => {
          alert("Done", result);
          this.todos = this.todos.filter(item => item.id != id);
        })
        .catch(error => {
          alert("ERROR", error);
        });
    }
  }
};
</script>
