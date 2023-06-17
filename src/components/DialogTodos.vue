<template>
  <b-modal id="todos-dialog" scrollable title="Todos" hide-footer>
    <b-button v-b-modal.add-todo-dialog variant="outline-primary" class="mb-3">
      Add new todo
    </b-button>
    <DialogAddTodo />
    <DialogEditTodo />

    <div v-if="currentTodos.length" class="accordion" role="tablist">
      <Todo v-for="todo of currentTodos" :key="todo.id" :todo="todo" />
    </div>
    <div v-else>List is empty</div>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";

import DialogAddTodo from "./DialogAddTodo.vue";
import DialogEditTodo from "./DialogEditTodo.vue";
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
    DialogAddTodo,
    DialogEditTodo,
  },
  computed: {
    ...mapGetters("todos", ["currentTodos"]),
  },
};
</script>
