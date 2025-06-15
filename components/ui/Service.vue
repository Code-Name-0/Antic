<template>


<div class="service-container flex flex-col gap-4 items-start">
    <div class="service-title">
        {{ title }}
    </div>

    <div class="service-description">
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
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.2px;
        color: $terracotta;
    }

    .service-description {
        font-family: $font-varta;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0px;
        color: $brown-light;
    }
}
</style>