<template>

<div class="action-link-container">

    <a :href="href" class="action-link" :style="styles">
        {{ text }}
    </a>

</div>


</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: 'Click here'
  }
});
const styles = computed(() => {
  const styleObj = {};
  
  if (props.color) {
    styleObj.color = props.color;
  }
  
  return styleObj;
});
</script>

<style lang="scss">
.action-link-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .action-link{
    color: $terracotta;
  }
}
</style>