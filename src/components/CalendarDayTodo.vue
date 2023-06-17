<template>
  <div class="todo">
    <span>{{ todo.title }}</span>
    <span>{{ todoTime }}</span>
  </div>
</template>

<script>
import dayjs from "dayjs";

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
};
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
}
</style>
