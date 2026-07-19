<script setup lang="ts">
// utils
import { useCalendarStore } from "@/modules/calendar/store/calendarStore";
import { useTaskStore } from "@/modules/calendar/store/taskStore";
import { formatDateKey, isToday } from "@/modules/calendar/utils/calendarHelpers";
import { TASK_TYPE_COLOR } from "@/modules/calendar/constants";
// types
import type { CalendarDay } from "@/modules/calendar/types/types";
//styles
import styles from "./style.module.scss";

const calendarStore = useCalendarStore()
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
const { getTasksByDate } = useTaskStore()


const getTasksIndicatorColor = (day: CalendarDay): string[] => {
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
