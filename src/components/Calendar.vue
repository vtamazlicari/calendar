<template>
  <div>
    <div class="weeks">
      <!-- <CalendarWeekDays :weekNr="0" /> -->
      <div>Mo</div>
      <div>Tu</div>
      <div>We</div>
      <div>Th</div>
      <div>We</div>
      <div>Sa</div>
    </div>

    <div>
      <div></div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
// import CalendarWeekDays from "./CaledarWeekDays";

dayjs.extend(weekdayPlugin);

export default {
  name: "Calendar",
  components: {
    // CalendarWeekDays,
  },
};
</script>

<style>
.weeks {
  display: flex;
}
</style>
