<template>
  <div class="calendar">
    <div class="weeks">
      <CalendarWeekDays
        v-for="day in 7"
        :key="`week-day-${day}`"
        :weekNr="day"
      />
    </div>

    <DialogTodos />
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import { mapActions } from "vuex";

import CalendarWeekDays from "./CaledarWeekDays";
import DialogTodos from "./DialogTodos.vue";

dayjs.extend(weekdayPlugin);

export default {
  name: "Calendar",
  components: {
    CalendarWeekDays,
    DialogTodos,
  },
  created() {
    this.getTodos();
  },
  methods: {
    ...mapActions("todos", ["getTodos"]),
  },
};
</script>

<style>
.calendar {
  height: 100vh;
}
.weeks {
  display: flex;
  height: 100%;
}
</style>
