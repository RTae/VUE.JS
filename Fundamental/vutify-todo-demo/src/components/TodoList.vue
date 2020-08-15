<template>
  <div id="todolist">
    <v-container>
      <!-- Todo-list -->
      <v-card>
        <v-card-title primary-title>
          <v-container>
            <v-row
              class="d-flex flex-row align-center"
              v-for="(item, index) in todos"
              :key="index"
            >
              <v-col cols="12" class="d-flex flex-row align-center py-1">
                <v-checkbox class="mr-2" v-model="item.completed" />
                <span>{{ item.title }}</span>
                <v-spacer></v-spacer>
                <v-btn @click="$emit('onRemove', item.id)" color="error">
                  X
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todos"]
};
</script>

<style></style>
