<script setup lang="ts">
import { useCalendarStore } from "@/modules/calendar/store/calendarStore";
import { isToday } from "@/modules/calendar/utils/calendarHelpers";
import styles from "./style.module.scss";

const store = useCalendarStore()
const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
</script>

<template>
  <div :class="styles.miniCalendar">
    <template v-for="day in weekDays" :key="day">
      <h6 :class="styles.weekDay"> {{ day }} </h6>
    </template>

    <div v-for="(day, id) in store.calendarGrid" :key="id" :class="[
      styles.dayCell,
      !day.isCurrentMonth ? styles.inactive : '',
      isToday(day) ? styles.isToday : ''
    ]">
      {{ day.day }}
    </div>
  </div>
</template>

<style scoped></style>
