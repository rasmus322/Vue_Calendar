import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { generateCalendarGrid } from "../lib/helpers";

export const useCalendarStore = defineStore("calendar", () => {
  // states
  const currentYear = ref<number>(new Date().getFullYear());
  const currentMonth = ref<number>(new Date().getMonth());

  // computed
  const currentMonthName = computed<string>(() => {
    return new Date(currentYear.value, currentMonth.value, 1).toLocaleString("ru", {
      month: "long",
    });
  });
  const calendarGrid = computed(() => {
    return generateCalendarGrid(currentYear.value, currentMonth.value);
  });

  // methods
  const setNextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  };
  const setPrevMonth = () => {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  };

  return {
    currentYear,
    currentMonth,
    currentMonthName,
    calendarGrid,
    setNextMonth,
    setPrevMonth,
  };
});
