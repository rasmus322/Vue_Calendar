<script setup lang="ts">
// utils
import { TASK_TYPE_COLOR } from '@widgets/side-bar/lib/constants';
import { formatDisplayDate } from '@entities/task/lib/helpers';
// types
import type { Task } from '@entities/task/types/task';
// styles
import styles from './style.module.scss'

interface Props {
  task: Task,
  showDate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDate: false
})

const taskColor = TASK_TYPE_COLOR[props.task.taskType]
console.log(taskColor)
</script>

<template>
  <div :class="styles.task">
    <span :class="styles.task__indicator" :style="{ backgroundColor: taskColor }"></span>
    <span :class="styles.task__time">
      {{ props.task.timeRange.start + '-' + props.task.timeRange.end }}
      <span v-if="props.showDate"> {{ formatDisplayDate(props.task.date) }} </span>
    </span>
    <h6 :class="styles.task__name">{{ props.task.name }}</h6>
    <p v-if="task.description" :class="styles.task__description"> {{ props.task.description }} </p>
  </div>
</template>

<style scoped></style>
