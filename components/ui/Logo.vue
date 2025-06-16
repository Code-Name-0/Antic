<template>
  <h1 
    class="logo-text font-bold text-[34px] leading-[25px] tracking-[2px] m-0 p-0"
    :style="logoStyles"
  >
    antic
  </h1>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: null
  }
})

const logoStyles = computed(() => {
  const styles = {}
  
  if (props.color) {
    styles.color = props.color
  }
  
  return styles
})
</script>

<style lang="scss">
.logo-text {
  font-family: $font-merriweather;
  color: $brown-dark;
  
  @include desktop {
    color: $terracotta;
  }
}
</style>