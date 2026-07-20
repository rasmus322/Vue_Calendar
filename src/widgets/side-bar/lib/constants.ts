import type { TaskType } from "@entities/task/types/task";

export const TASK_TYPE_COLOR: Record<TaskType, string> = {
  regular: "#3b82f6",
  important: "#ec4899",
  withDeadLine: "#ef4444",
};
