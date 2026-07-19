import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types/types";

export const useTaskStore = defineStore("task", () => {
  //states
  const tasks = ref<Task[]>([
    {
      id: uuidv4(),
      name: "test task today",
      description: "today description bla bla bla",
      date: new Date().toLocaleDateString("en-CA"), // Сегодня
      timeRange: { start: "08:30", end: "09:00" },
      taskType: "regular",
    },
    {
      id: uuidv4(),
      name: "test task today",
      description:
        "today description bla blllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllla bla",
      date: new Date().toLocaleDateString("en-CA"), // Сегодня
      timeRange: { start: "08:30", end: "09:00" },
      taskType: "important",
    },
    {
      id: uuidv4(),
      name: "test task tomorrow",
      date: new Date(Date.now() + 86400000).toLocaleDateString("en-CA"), // Завтра
      timeRange: { start: "10:00", end: "11:00" },
      taskType: "withDeadLine",
    },
    {
      id: uuidv4(),
      name: "test task other",
      date: "2026-07-25",
      timeRange: { start: "12:00", end: "13:00" },
      taskType: "regular",
    },
    {
      id: uuidv4(),
      name: "test task other",
      date: "2026-07-25",
      timeRange: { start: "12:00", end: "13:00" },
      taskType: "regular",
    },
    {
      id: uuidv4(),
      name: "test task other",
      date: "2026-07-25",
      timeRange: { start: "12:00", end: "13:00" },
      taskType: "regular",
    },
    {
      id: uuidv4(),
      name: "test task other",
      date: "2026-07-25",
      timeRange: { start: "12:00", end: "13:00" },
      taskType: "regular",
    },
  ]);

  // computed
  const today = computed(() => {
    return new Date().toLocaleDateString("en-CA");
  });
  const tomorrow = computed(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("en-CA");
  });

  const getTodayTasks = computed(() => getTasksByDate(today.value));

  const getTomorrowTasks = computed(() => getTasksByDate(tomorrow.value));

  const getOtherTasks = computed(() => {
    return tasks.value.filter((task) => task.date !== today.value && task.date !== tomorrow.value);
  });

  //methods
  const getTasksByDate = (date: string) => {
    return tasks.value.filter((task) => task.date === date);
  };

  const addTask = (task: Task) => {
    tasks.value.push(task);
  };

  const removeTask = (id: string) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  const updateTask = (id: string, updates: Omit<Partial<Task>, "id">) => {
    const index = tasks.value.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updates } as Task;
    }
  };

  return {
    tasks,
    today,
    tomorrow,
    getTodayTasks,
    getTomorrowTasks,
    getOtherTasks,
    getTasksByDate,
    addTask,
    removeTask,
    updateTask,
  };
});
