<script setup lang="ts">
import styles from "./style.module.scss";
</script>

<template>
  <div :class="styles.container">
    <h1 :class="styles.title">February <span> 2026 </span></h1>
    <div :class="styles.btns">
      <button :class="styles.btn"></button>
      <button :class="styles.btn"></button>
    </div>
  </div>
</template>

<style scoped></style>
