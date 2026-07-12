<script setup lang="ts">
import { useCalendarStore } from "@/modules/calendar/store/calendarStore";
import ArrowIcon from "@/components/UI/icons/ArrowIcon.vue";
// styles
import styles from "./style.module.scss";

const store = useCalendarStore();
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.header">
      <h1 :class="styles.title">
        {{ store.currentMonthName }} <span> {{ store.currentYear }} </span>
      </h1>
      <div :class="styles.btns">
        <button :class="[styles.btn, styles.btn_prev]" @click="store.prevMonth">
          <ArrowIcon />
        </button>
        <button :class="[styles.btn, styles.btn_next]" @click="store.nextMonth">
          <ArrowIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
