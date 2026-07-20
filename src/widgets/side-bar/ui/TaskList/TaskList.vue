<script setup lang="ts">
// utils
import { formatDisplayDate } from "@entities/task/lib/helpers.ts";
import { useTaskStore } from "@entities/task/store/taskStore.ts";
// components
import TaskItem from "./TaskItem/TaskItem.vue";
//styles
import styles from "./style.module.scss"

const { today, tomorrow, getTodayTasks, getTomorrowTasks, getOtherTasks } = useTaskStore()
</script>

<template>
  <ul :class="styles.taskList">
    <li :class="styles.taskList__dayItem">
      <h3 :class="[styles.taskList__dayTitle, styles.today]">сегодня <span> {{ formatDisplayDate(today) }} </span></h3>
      <TaskItem v-for="task in getTodayTasks" :key="task.id" :task="task" />
      <p v-if="getTodayTasks.length === 0" :class="styles.taskList__emptyTasks"> Нет задач </p>
    </li>
    <li :class="styles.taskList__dayItem">
      <h3 :class="[styles.taskList__dayTitle, styles.tomorrow]">завтра <span> {{ formatDisplayDate(tomorrow) }} </span>
      </h3>
      <TaskItem v-for="task in getTomorrowTasks" :key="task.id" :task="task" />
      <p v-if="getTomorrowTasks.length === 0" :class="styles.taskList__emptyTasks"> Нет задач </p>
    </li>
    <li :class="styles.taskList__dayItem">
      <h3 :class="[styles.taskList__dayTitle, styles.other]">остальные</h3>
      <TaskItem v-for="task in getOtherTasks" :key="task.id" :task="task" :show-date="true" />
    </li>
  </ul>
</template>

<style scoped></style>
