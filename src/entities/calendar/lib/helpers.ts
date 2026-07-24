import type { CalendarDay } from "../types/calendar";

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

export const formatDateKey = (day: CalendarDay): string => {
  const month = String(day.month + 1).padStart(2, "0");
  const date = String(day.day).padStart(2, "0");
  return `${day.year}-${month}-${date}`;
};
