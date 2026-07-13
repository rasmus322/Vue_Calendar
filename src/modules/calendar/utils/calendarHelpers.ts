import type { CalendarDay } from "../types/types";

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayIndex = (year: number, month: number): number => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

export const isToday = (day: CalendarDay): boolean => {
  const today = new Date();
  return (
    day.isCurrentMonth &&
    day.day === today.getDate() &&
    day.month === today.getMonth() &&
    day.year === today.getFullYear()
  );
};

export const generateCalendarGrid = (year: number, month: number): CalendarDay[] => {
  const daysInCurrent = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayIndex(year, month);
  const totalCells = 42;

  // prev month
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrev = getDaysInMonth(prevYear, prevMonth);

  const prevMonthDays: CalendarDay[] = Array.from({ length: firstDayIndex }, (_, i) => ({
    day: daysInPrev - firstDayIndex + i + 1,
    month: prevMonth,
    year: prevYear,
    isCurrentMonth: false,
  }));

  // Current month
  const currentMonthDays: CalendarDay[] = Array.from({ length: daysInCurrent }, (_, i) => ({
    day: i + 1,
    month,
    year,
    isCurrentMonth: true,
  }));

  // Next month
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  const daysNeeded = totalCells - (prevMonthDays.length + currentMonthDays.length);

  const nextMonthDays: CalendarDay[] = Array.from({ length: daysNeeded }, (_, i) => ({
    day: i + 1,
    month: nextMonth,
    year: nextYear,
    isCurrentMonth: false,
  }));

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};
