import type { CalendarDay, CalendarView } from "../types/calendar";

export const generateDayGrid = (year: number, month: number, day: number): CalendarDay[] => {
  return [
    {
      day,
      month,
      year,
      isCurrentMonth: true,
    },
  ];
};

export const generateWeekGrid = (
  year: number,
  month: number,
  dayOfMonth: number,
): CalendarDay[] => {
  const grid: CalendarDay[] = [];
  const currentDate = new Date(year, month, dayOfMonth);

  const dayOfWeek = currentDate.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(currentDate);
  monday.setDate(monday.getDate() + mondayOffset);

  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(date.getDate() + i);
    grid.push({
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth: date.getMonth() === month,
    });
  }

  return grid;
};

export const generateMonthGrid = (year: number, month: number): CalendarDay[] => {
  const grid: CalendarDay[] = [];

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  let startDayOfWeek = firstDay.getDay() - 1;
  if (startDayOfWeek === -1) startDayOfWeek = 6;

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i;
    const date = new Date(year, month - 1, day);
    grid.push({
      day,
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth: false,
    });
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    grid.push({
      day,
      month,
      year,
      isCurrentMonth: true,
    });
  }

  let nextDay = 1;
  while (grid.length < 42) {
    const date = new Date(year, month + 1, nextDay);
    grid.push({
      day: nextDay,
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth: false,
    });
    nextDay++;
  }

  return grid;
};

export const generateYearGrid = (year: number): CalendarDay[] => {
  const grid: CalendarDay[] = [];

  for (let month = 0; month < 12; month++) {
    grid.push({
      day: 1,
      month,
      year,
      isCurrentMonth: true,
    });
  }

  return grid;
};

export const generateGrid = (
  year: number,
  month: number,
  view: CalendarView,
  day?: number,
): CalendarDay[] => {
  switch (view) {
    case "month":
      return generateMonthGrid(year, month);
    case "week":
      return generateWeekGrid(year, month, day || 1);
    case "day":
      return generateDayGrid(year, month, day || 1);
    case "year":
      return generateYearGrid(year);
    default:
      return generateMonthGrid(year, month);
  }
};
