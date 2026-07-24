export interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

export type CalendarView = "day" | "week" | "month" | "year";

export interface CalendarState {
  currentYear: number;
  currentMonth: number;
  view: CalendarView;
  grid: CalendarDay[];
}
