<script setup lang="ts">
// utils
import { TASK_TYPE_COLOR } from "../../lib/constants";
import { useCalendarStore } from "@entities/calendar/store/calendarStore";
import { useTaskStore } from "@entities/task/store/taskStore";
import { formatDateKey, isToday } from "@entities/calendar/lib/helpers";
// types
import type { CalendarDay } from "@entities/calendar/types/calendar";
//styles
import styles from "./style.module.scss";

const calendarStore = useCalendarStore()
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
const { getTasksByDate } = useTaskStore()


const getTasksIndicatorColor = (day: CalendarDay) => {
  const dateKey = formatDateKey(day)
  const tasks = getTasksByDate(dateKey)

  return tasks.slice(0, 3).map(task => TASK_TYPE_COLOR[task.taskType])
}
</script>

<template>
  <div :class="styles.miniCalendar">
    <template v-for="day in weekDays" :key="day">
      <h6 :class="styles.miniCalendar__weekDay"> {{ day }} </h6>
    </template>

    <div v-for="(day, id) in calendarStore.calendarGrid" :key="id" :class="[
      styles.miniCalendar__dayCell,
      !day.isCurrentMonth ? styles.inactive : '',
      isToday(day) ? styles.isToday : ''
    ]">
      {{ day.day }}
      <div :class="styles.miniCalendar__tasksCounter">
        <span v-for="(color, id) in getTasksIndicatorColor(day)" :key="id" :style="{ backgroundColor: color }"
          :class="styles.miniCalendar__taskIndicator"></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
