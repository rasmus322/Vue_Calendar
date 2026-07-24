import { generateMonthGrid } from "@/entities/calendar/lib/generateGrid";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMiniCaledarStore = defineStore("miniCalendar", () => {
  // state
  const currentYear = ref<number>(new Date().getFullYear());
  const currentMonth = ref<number>(new Date().getMonth());

  // computed
  const currentMonthShortName = computed<string>(() => {
    return new Date(currentYear.value, currentMonth.value, 1).toLocaleString("ru", {
      month: "short",
    });
  });
  const grid = computed(() => generateMonthGrid(currentYear.value, currentMonth.value));

  // methods
  const nextMonth = () => {
    let year = currentYear.value;
    let month = currentMonth.value;

    month++;
    if (month > 11) {
      month = 0;
      year++;
    }

    currentYear.value = year;
    currentMonth.value = month;
  };
  const prevMonth = () => {
    let year = currentYear.value;
    let month = currentMonth.value;

    month--;
    if (month < 0) {
      month = 11;
      year--;
    }

    currentYear.value = year;
    currentMonth.value = month;
  };

  return {
    currentYear,
    currentMonth,
    currentMonthShortName,
    grid,
    nextMonth,
    prevMonth,
  };
});
