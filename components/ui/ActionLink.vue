<template>
    <div class="action-link-container flex justify-center items-center">
        <a :href="href" class="action-link font-bold text-xl leading-[25px] tracking-[0.3px] flex flex-row justify-center items-center gap-2" :style="styles">
            {{ text }} 
            <img :src="Right" alt="right arrow" class="w-1.5 h-2.5" />
        </a>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Right from '~/assets/images/icons/Right.svg';

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
.action-link-container{
  width: fit-content;
}
.action-link {
    color: $terracotta;
    font-family: $font-karla;

}
</style>