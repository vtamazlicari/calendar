<template>
  <b-modal id="edit-todo-dialog" scrollable title="Edit todo" hide-footer>
    <TodoForm v-if="selectedTodo" :form="form" @submit="onSubmit" />
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import dayjs from "dayjs";

import TodoForm from "./TodoForm.vue";

export default {
  components: { TodoForm },
  computed: {
    ...mapGetters("todos", ["selectedTodo"]),
    form() {
      const date = dayjs(this.selectedTodo.date).format("HH:mm");
      const payload = {
        ...this.selectedTodo,
        date,
      };

      return payload;
    },
  },
  methods: {
    ...mapActions("todos", ["editTodo"]),
    onSubmit(payload) {
      this.editTodo(payload);
      this.$bvModal.hide("edit-todo-dialog");
    },
  },
};
</script>
