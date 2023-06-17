<template>
  <b-modal id="add-todo-dialog" scrollable title="Add todo" hide-footer>
    <TodoForm :form="form" @submit="onSubmit" />
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

import TodoForm from "./TodoForm.vue";

export default {
  components: { TodoForm },
  data() {
    return {
      form: {
        title: "",
        descriptions: "",
        date: "",
      },
    };
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    onSubmit(payload) {
      this.addTodo(payload);
      this.$bvModal.hide("add-todo-dialog");
    },
  },
};
</script>
