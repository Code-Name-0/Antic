<template>
  <button 
    @click="handleClick" 
    :class="buttonClasses" 
    :disabled="disabled"
    class="cursor-pointer transition-all duration-300"
  >
    <slot>
      <div v-if="variant === 'link'" class="flex items-center justify-center gap-2">
        {{ text }}
        <img :src="Right" alt="right arrow" class="w-1.5 h-2.5" />
      </div>
      <span v-else>{{ text }}</span>
    </slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import Right from '~/assets/images/icons/Right.svg';

const props = defineProps({
  text: {
    type: String,
    default: 'Click here'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'link', 
    validator: (value) => ['link', 'filled'].includes(value)
  },
  customClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
  const baseClasses = [];
  
  if (props.variant === 'link') {
    baseClasses.push('button-link', 'bg-transparent', 'border-none', 'font-bold', 'text-xl', 'leading-[25px]', 'tracking-[0.3px]', 'rounded-none');
  } else {
    baseClasses.push('button-filled', 'border-none', 'text-white', 'font-bold', 'text-[17px]', 'leading-[25px]', 'tracking-[0.3px]', 'px-3', 'h-[50px]', 'gap-[10px]', 'flex', 'items-center', 'justify-center', 'rounded-none');
  }
  
  if (props.customClass) {
    baseClasses.push(props.customClass);
  }
  
  return baseClasses.join(' ');
});

const handleClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>

<style lang="scss">

.button-link {
  color: $terracotta;
  font-family: $font-karla;
  
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
}

.button-filled {
  font-family: $font-karla;
  background-color: $brown-dark;
  
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: $terracotta;
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
}
</style>