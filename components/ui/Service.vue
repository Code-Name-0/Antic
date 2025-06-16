<template>
<div class="service-container flex flex-col gap-4 items-start">
    <div class="service-title font-semibold text-[25px] leading-[30px] tracking-[-0.2px]">
        {{ title }}
    </div>

    <div class="service-description font-normal text-lg leading-[25px] tracking-[0px]">
        {{ description }}
    </div>
</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});
</script>



<style lang="scss">
.service-container {
    .service-title {
        font-family: $font-varta;
        color: $terracotta;
        
    }

    .service-description {
        font-family: $font-varta;
        color: $brown-light;
    
    }
}
</style>