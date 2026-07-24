<script setup lang="ts">
// utils
import { computed } from "vue";
import { useCalendarStore } from "@/entities/calendar/store/calendarStore";
import type { CalendarView } from "@/entities/calendar/types/calendar";
// components
import ButtonComponent from "@/shared/ui/Button/ButtonComponent.vue";
// styles
import styles from "./style.module.scss"

const calendarStore = useCalendarStore()

const viewModes = computed(() => [
  { key: "day" as const, label: "День" },
  { key: "week" as const, label: "Неделя" },
  { key: "month" as const, label: "Месяц" },
  { key: "year" as const, label: "Год" },
])

const handleChangeView = (view: CalendarView) => {
  calendarStore.setCalendarView(view)
}
</script>

<template>
  <nav :class="styles.viewSwitcher">
    <ButtonComponent v-for="view in viewModes" :key="view.key"
      :variant="calendarStore.view === view.key ? 'danger' : 'primary'" size="sm"
      :class="[styles.viewSwitcher__btn, calendarStore.view === view.key ? 'active' : '']"
      @click="handleChangeView(view.key)">
      {{ view.label }}
    </ButtonComponent>
  </nav>
</template>

<style scoped></style>
