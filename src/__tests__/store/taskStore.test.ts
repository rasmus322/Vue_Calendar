import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect } from "vitest";
import { useTaskStore } from "@/modules/calendar/store/taskStore";
import type { Task } from "@/modules/calendar/types/types";

describe("taskStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Создается с пустым массивом задач", () => {
    const store = useTaskStore();
    expect(store.tasks).toEqual([]);
  });

  it("Добавляет задачу через метод addTask", () => {
    const store = useTaskStore();
    const newTask: Task = {
      id: "test_id",
      name: "test task",
      date: "2026-07-20",
      timeRange: { start: "09:00", end: "10:00" },
      taskType: "regular",
    };

    store.addTask(newTask);
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0]?.name).toBe("test task");
  });

  it("Фильтрует задачи по дате через getTasksByDate", () => {
    const store = useTaskStore();
    store.addTask({
      id: "1",
      name: "Task 1",
      date: "2026-07-20",
      timeRange: { start: "09:00", end: "10:00" },
      taskType: "regular",
    });
    store.addTask({
      id: "2",
      name: "Task 2",
      date: "2026-07-21",
      timeRange: { start: "11:00", end: "12:00" },
      taskType: "important",
    });

    const tasks = store.getTasksByDate("2026-07-20");
    expect(tasks).toHaveLength(1);
    expect(tasks[0]?.id).toBe("1");
  });

  it("Удаляет задачу через removeTask", () => {
    const store = useTaskStore();
    store.addTask({
      id: "test_id",
      name: "test task",
      date: "2026-07-20",
      timeRange: { start: "09:00", end: "10:00" },
      taskType: "regular",
    });

    store.removeTask("test_id");
    expect(store.tasks).toHaveLength(0);
  });

  it("Обновляет задачу через updateTask", () => {
    const store = useTaskStore();
    store.addTask({
      id: "test_id",
      name: "test task",
      date: "2026-07-20",
      timeRange: { start: "09:00", end: "10:00" },
      taskType: "regular",
    });

    store.updateTask("test_id", { name: "test task updated", taskType: "important" });
    expect(store.tasks[0]?.name).toBe("test task updated");
    expect(store.tasks[0]?.taskType).toBe("important");
    expect(store.tasks[0]?.id).toBe("test_id");
  });
});
