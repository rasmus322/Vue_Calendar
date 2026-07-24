<script setup lang="ts">
import { computed } from "vue";
import styles from "./style.module.scss"
import type { ButtonProps } from "./types";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'sm',
  type: 'button',
  position: 'solo',
  disabled: false
})
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  styles.btn,
  styles[`btn__${props.variant}`],
  styles[`btn__${props.size}`],
  props.position !== 'solo' && styles[`btn__${props.position}`],
  props.disabled && styles['btn__disabled']
])

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return
  emit('click', event)
}
</script>

<template>
  <button :type="type" :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped></style>
