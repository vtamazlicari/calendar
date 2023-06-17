<template>
  <div class="week-day">
    <div>{{ weekName }}</div>
    <CalendarWeekDay v-for="date of dates" :key="date" :date="date" />
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";

import CalendarWeekDay from "./CalendarWeekDay.vue";

dayjs.extend(weekdayPlugin);

export default {
  components: {
    CalendarWeekDay,
  },
  props: {
    weekNr: {
      type: Number,
      required: true,
    },
  },
  computed: {
    dates() {
      return this.getDates(this.weekNr);
    },
    weekName() {
      return dayjs().weekday(this.weekNr).format("dd");
    },
  },
  methods: {
    getDates(nr) {
      const nextMonthNr = dayjs().add(1, "month").month();

      let startOfMonth = dayjs().startOf("month").weekday(nr);
      let dates = [];

      while (startOfMonth.month() <= nextMonthNr && dates.length < 6) {
        dates.push(startOfMonth.toISOString());

        startOfMonth = startOfMonth.add(1, "w");
      }

      return dates;
    },
  },
};
</script>

<style scoped>
.week-day {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
