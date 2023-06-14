<script setup>
import {computed} from "vue";

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const properties = computed(() => {
  const mapColors = {
    primary: ['text-black', 'bg-third', 'focus:ring-primary'],
    secondary: ['text-white', 'bg-indigo-rainbow', 'border-white', 'focus:ring-white'],
  }

  const mapSizes = {
    sm: ['px-2', 'py-1', 'gap-1'],
    md: ['px-4', 'py-2', 'gap-2'],
    lg: ['px-8', 'py-4', 'gap-4'],
  }

  const disabled = props.disabled ? ['opacity-75 cursor-default'] : []

  return [
      ...mapColors[props.color],
      ...mapSizes[props.size],
      ...disabled,
  ]
})
</script>

<template>
  <button
      class="overflow-hidden bg-noise-turbulence button-main-gradient font-semibold drop-shadow-md hover:drop-shadow-lg active:drop-shadow-square-double focus:outline-none focus:ring-1"
      :class="properties"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>