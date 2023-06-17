<template>
  <button
    type="button"
    @click="openDialog"
    class="day"
    :class="{
      'day--disabled': isDisabled,
      'day--today': isToday,
      'day--has-todos': !!filteredTodos.length,
    }"
  >
    <span class="day-nr">{{ day }}</span>
    <div class="todos">
      <CalendarDayTodo
        v-for="todo of filteredTodos"
        :key="todo.id"
        :todo="todo"
      />
    </div>
  </button>
</template>

<script>
import dayjs from "dayjs";
import { mapActions, mapGetters } from "vuex";
import isTodayPagin from "dayjs/plugin/isToday";

import CalendarDayTodo from "./CalendarDayTodo.vue";

dayjs.extend(isTodayPagin);

export default {
  components: {
    CalendarDayTodo,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("todos", ["todosByDate", "todos"]),
    day() {
      return dayjs(this.date).date();
    },
    isDisabled() {
      return dayjs(this.date).month() !== dayjs().month();
    },
    isToday() {
      return dayjs(this.date).isToday();
    },
    filteredTodos() {
      return this.todosByDate(this.date);
    },
  },
  methods: {
    ...mapActions("todos", ["selectDate"]),
    openDialog() {
      if (this.isDisabled) return;

      this.selectDate(this.date);
      this.$bvModal.show("todos-dialog");
    },
  },
};
</script>

<style scoped>
.day {
  flex: 1;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-left: 1px solid #c7c3c3;
  border-top: 1px solid #c7c3c3;
  font-weight: 600;
}

.day--today {
  border: 2px solid #e8ad6e;
}

.day--has-todos {
  background-color: #8abade;
  color: #fff;
}

.day--disabled {
  color: #c7c3c3;
}

.todos {
  width: 100%;
  height: 70px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.day-nr {
  font-weight: 600;
}
</style>
