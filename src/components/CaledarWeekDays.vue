<template>
  <div>
    <div>{{ weekName }}</div>
    <div v-for="day of days" :key="day">{{ day }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
dayjs.extend(weekdayPlugin);

export default {
  props: {
    weekNr: {
      type: Number,
      required: true,
    },
  },
  computed: {
    days() {
      return this.getDays(this.weekNr);
    },
    weekName() {
      return dayjs().weekday(this.weekNr).format("dd");
    },
  },
  methods: {
    getDays(nr) {
      const nextMonthNr = dayjs().add(1, "month").month();

      let startOfMonth = dayjs().startOf("month").weekday(nr);
      let dates = [];

      while (startOfMonth.month() !== nextMonthNr) {
        dates.push(startOfMonth.date());

        startOfMonth = startOfMonth.add(1, "w");
      }

      return dates;
    },
  },
};
</script>

<style>
.weeks {
  display: flex;
}
</style>
