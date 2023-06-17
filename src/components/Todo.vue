<template>
  <b-card no-body class="mb-1">
    <b-card-header
      v-b-toggle="`accordion-${todo.id}`"
      header-tag="header"
      class="p-1"
      role="tab"
    >
      <div class="d-flex justify-content-between">
        <span>{{ todo.title }} - {{ todoTime }}</span>
        <div>
          <button
            type="button"
            @click.stop.prevent="() => removeTodo(todo.id)"
            class="mx-2"
          >
            <b-icon icon="trash"></b-icon>
          </button>
          <button type="button" @click.stop.prevent="editTodo" class="mx-2">
            <b-icon icon="pencil"></b-icon>
          </button>
        </div>
      </div>
    </b-card-header>
    <b-collapse
      :id="`accordion-${todo.id}`"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-card-text>{{ todo.descriptions }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import dayjs from "dayjs";
import { mapActions } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    todoTime() {
      return dayjs(this.todo.date).format("HH:mm");
    },
  },
  methods: {
    ...mapActions("todos", ["removeTodo", "selectTodo"]),
    editTodo() {
      this.selectTodo(this.todo.id);
      this.$bvModal.show("edit-todo-dialog");
    },
  },
};
</script>
