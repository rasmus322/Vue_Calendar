<script setup lang="ts">
// utils
import { useCalendarStore } from "@/modules/calendar/store/calendarStore";
// components
import ArrowIcon from "@/components/UI/icons/ArrowIcon.vue";
import MiniCalendar from "../MiniCalendar/MiniCalendar.vue";
import TaskList from "../TaskList/TaskList.vue";
// styles
import styles from "./style.module.scss";

const store = useCalendarStore();
</script>

<template>
  <div :class="styles.sideBar">
    <div :class="styles.sideBar__header">
      <h1 :class="styles.sideBar__title">
        {{ store.currentMonthName }} <span> {{ store.currentYear }} </span>
      </h1>
      <div :class="styles.sideBar__btns">
        <button :class="[styles.sideBar__btn, styles.btn_prev]" @click="store.setPrevMonth">
          <ArrowIcon />
        </button>
        <button :class="[styles.sideBar__btn, styles.btn_next]" @click="store.setNextMonth">
          <ArrowIcon />
        </button>
      </div>
    </div>
    <MiniCalendar />
    <TaskList />
  </div>
</template>

<style scoped></style>
