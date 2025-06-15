<template>
    <div class="action-button-container flex justify-center items-center">
        <button @click="handleClick" class="action-button bg-transparent border-none cursor-pointer" :style="styles" :disabled="disabled">
            <slot>
                <div class="button-content flex flex-row justify-center items-center gap-2">
                    {{ text }} 
                    <img :src="Right" alt="right arrow" class="arrow-icon w-1.5 h-2.5" />
                </div>
            </slot>
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Right from '~/assets/images/icons/Right.svg';

const props = defineProps({
  text: {
    type: String,
    default: 'Click here'
  },
  onClick: {
    type: Function,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: null
  }
});

const styles = computed(() => {
  const styleObj = {};
  
  if (props.color) {
    styleObj.color = props.color;
  }
  
  return styleObj;
});

const handleClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick();
  }
};
</script>

<style lang="scss">
.action-button {
    color: $terracotta;
    font-family: $font-karla;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.3px;
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &:hover:not(:disabled) {
        opacity: 0.8;
    }
}
</style>