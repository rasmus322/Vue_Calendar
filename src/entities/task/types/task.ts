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
