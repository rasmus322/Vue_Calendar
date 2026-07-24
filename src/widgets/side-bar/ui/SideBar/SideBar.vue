<script setup lang="ts">
// utils
import { useMiniCaledarStore } from "@/entities/mini-calendar/store/miniCalendarStore.ts";
// components
import TaskList from "../TaskList/TaskList.vue";
import MiniCalendar from "../MiniCalendar/MiniCalendar.vue";
import ArrowIcon from "@shared/assets/icons/ArrowIcon.vue";
import ButtonComponent from "@/shared/ui/Button/ButtonComponent.vue";
// styles
import styles from "./style.module.scss";

const miniCalendarStore = useMiniCaledarStore();
</script>

<template>
  <div :class="styles.sideBar">
    <div :class="styles.sideBar__header">
      <h1 :class="styles.sideBar__title">
        {{ miniCalendarStore.currentMonthShortName }}
        <span :class="styles.sideBar__title__year">
          {{ miniCalendarStore.currentYear }}
        </span>
      </h1>
      <div :class="styles.sideBar__btns">
        <ButtonComponent @click="miniCalendarStore.prevMonth" position="left" variant="secondary" size="xs">
          <ArrowIcon class="flipped" />
        </ButtonComponent>
        <ButtonComponent @click="miniCalendarStore.nextMonth" position="right" variant="secondary" size="xs">
          <ArrowIcon />
        </ButtonComponent>
      </div>
    </div>
    <MiniCalendar />
    <TaskList />
  </div>
</template>

<style scoped></style>
