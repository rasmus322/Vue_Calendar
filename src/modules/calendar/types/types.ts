export interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

export type TaskType = "important" | "regular" | "withDeadLine";

export interface Task {
  id: string;
  name: string;
  description?: string;
  date: string;
  timeRange: {
    start: string;
    end: string;
  };
  taskType: TaskType;
}
