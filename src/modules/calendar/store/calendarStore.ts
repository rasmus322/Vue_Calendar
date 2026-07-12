import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCalendarStore = defineStore("calendar", () => {
  // states
  const currentYear = ref<number>(new Date().getFullYear());
  const currentMonth = ref<number>(new Date().getMonth());

  // computed
  const daysInMonth = computed<number[]>(() => {
    const daysCount = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();

    return Array.from({ length: daysCount }, (_, i) => i + 1);
  });
  const currentMonthName = computed<string>(() => {
    return new Date(currentYear.value, currentMonth.value, 1).toLocaleString("ru", {
      month: "long",
    });
  });

  // methods
  const nextMonth = () => {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  };

  const prevMonth = () => {
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
    daysInMonth,
    currentMonthName,
    nextMonth,
    prevMonth,
  };
});
