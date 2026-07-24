<script setup lang="ts">
// components
import { PeriodSwitcher } from "@/features/switch-calendar-period";
// styles
import styles from "./style.module.scss"
import ViewSwitcher from "@/features/switch-calendar-view/ui/ViewSwitcher.vue";
import ButtonComponent from "@/shared/ui/Button/ButtonComponent.vue";
</script>

<template>
  <header :class="styles.header">
    <PeriodSwitcher />
    <ViewSwitcher />
    <ButtonComponent variant="primary" size="sm" :class="styles.header__createBtn">
      Создать задачу
      <!-- Добавить обработчик клика -->
    </ButtonComponent>
  </header>
</template>

<style scoped></style>
