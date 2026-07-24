import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { CalendarState, CalendarView } from "../types/calendar";
import { generateGrid } from "../lib/generateGrid";

export const useCalendarStore = defineStore("calendar", () => {
  // state
  const state = ref<CalendarState>({
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    view: "month",
    grid: generateGrid(new Date().getFullYear(), new Date().getMonth(), "month"),
  });

  // computed
  const currentMonthShortName = computed<string>(() => {
    return new Date(state.value.currentYear, state.value.currentMonth, 1).toLocaleString("ru", {
      month: "short",
    });
  });
  const calendarGrid = computed(() => state.value.grid);

  // methods
  const setCurrentMonth = (year: number, month: number) => {
    state.value.currentYear = year;
    state.value.currentMonth = month;
    state.value.grid = generateGrid(year, month, state.value.view);
  };

  const setCalendarView = (view: CalendarView) => {
    state.value.view = view;
    const day = new Date().getDate();
    state.value.grid = generateGrid(state.value.currentYear, state.value.currentMonth, view, day);
  };

  const setNextMonth = () => {
    let { currentYear, currentMonth } = state.value;
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    setCurrentMonth(currentYear, currentMonth);
  };
  const setPrevMonth = () => {
    let { currentYear, currentMonth } = state.value;
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    setCurrentMonth(currentYear, currentMonth);
  };

  const setNextDay = () => {
    const currentDate = new Date(
      state.value.currentYear,
      state.value.currentMonth,
      new Date(state.value.currentYear, state.value.currentMonth + 1, 0).getDate(),
    );

    currentDate.setDate(currentDate.getDate() + 1);
    setCurrentMonth(currentDate.getFullYear(), currentDate.getMonth());
  };
  const setPrevDay = () => {
    const currentDate = new Date(state.value.currentYear, state.value.currentMonth, 1);

    currentDate.setDate(currentDate.getDate() - 2);
    setCurrentMonth(currentDate.getFullYear(), currentDate.getMonth());
  };

  const setNextWeek = () => {
    const currentDate = new Date(state.value.currentYear, state.value.currentMonth, 1);

    currentDate.setDate(currentDate.getDate() + 7);
    setCurrentMonth(currentDate.getFullYear(), currentDate.getMonth());
  };
  const setPrevWeek = () => {
    const currentDate = new Date(state.value.currentYear, state.value.currentMonth, 1);

    currentDate.setDate(currentDate.getDate() - 7);
    setCurrentMonth(currentDate.getFullYear(), currentDate.getMonth());
  };

  const setNextYear = () => {
    setCurrentMonth(state.value.currentYear + 1, state.value.currentMonth);
  };
  const setPrevYear = () => {
    setCurrentMonth(state.value.currentYear - 1, state.value.currentMonth);
  };

  return {
    currentYear: computed(() => state.value.currentYear),
    currentMonth: computed(() => state.value.currentMonth),
    view: computed(() => state.value.view),
    currentMonthShortName,
    calendarGrid,
    setCurrentMonth,
    setCalendarView,
    setNextMonth,
    setPrevMonth,
    setNextDay,
    setPrevDay,
    setNextWeek,
    setPrevWeek,
    setNextYear,
    setPrevYear,
  };
});
