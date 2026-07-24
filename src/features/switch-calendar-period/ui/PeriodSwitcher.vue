<script setup lang="ts">
import { useCalendarStore } from "@/entities/calendar/store/calendarStore";
import styles from "./style.module.scss"
import ButtonComponent from "@/shared/ui/Button/ButtonComponent.vue";
import ArrowIcon from "@/shared/assets/icons/ArrowIcon.vue";

const calendarStore = useCalendarStore()

const goToPrev = () => {
  switch (calendarStore.view) {
    case 'day':
      calendarStore.setPrevDay()
      break
    case 'week':
      calendarStore.setPrevWeek()
      break
    case 'month':
      calendarStore.setPrevMonth()
      break
    case 'year':
      calendarStore.setPrevYear()
      break
  }
}

const goToNext = () => {
  switch (calendarStore.view) {
    case 'day':
      calendarStore.setNextDay()
      break
    case 'week':
      calendarStore.setNextWeek()
      break
    case 'month':
      calendarStore.setNextMonth()
      break
    case 'year':
      calendarStore.setNextYear()
      break
  }
}

const goToToday = () => {
  const today = new Date()
  calendarStore.setCurrentMonth(today.getFullYear(), today.getMonth())
}
</script>

<template>
  <div :class="styles.periodSwitcher">
    <ButtonComponent variant="primary" size="xs" position="left" @click="goToPrev">
      <ArrowIcon class="flipped" />
    </ButtonComponent>
    <ButtonComponent variant="primary" size="xs" position="center" @click="goToToday">
      Сегодня
    </ButtonComponent>
    <ButtonComponent variant="primary" size="xs" position="right" @click="goToNext">
      <ArrowIcon />
    </ButtonComponent>
  </div>
</template>

<style scoped></style>
