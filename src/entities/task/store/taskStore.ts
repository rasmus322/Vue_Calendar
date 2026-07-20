import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Task } from "../types/task";

export const useTaskStore = defineStore("task", () => {
  //states
  const tasks = ref<Task[]>([]);

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
  const getTasksByDate = (date: string): Task[] => {
    return tasks.value.filter((task: Task) => task.date === date);
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
