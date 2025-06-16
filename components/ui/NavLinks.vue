<template>
    <div class="links flex flex-col items-start gap-4">
        <div class="links-title">
            <h2 class="font-semibold text-[25px] leading-[30px] tracking-[-0.2px]">{{ title }}</h2>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>


<script setup>
import {computed} from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: "Links"
    }
});


const styles = computed(() => {
  const styles = {}
  
  if (props.color) {
    styles.color = props.color
  }
  
  return styles
})

</script>

<style lang="scss">
.links-title {
    font-family: $font-varta;
    color: $primary-text;
}
</style>