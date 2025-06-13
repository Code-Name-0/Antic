<template>
  <li class="list-none m-0 p-0">
    <a :href="href" class="menu-link font-normal text-lg leading-[25px] tracking-[0px] no-underline block relative transition-colors duration-300 ease-in-out w-fit">
      {{ label }}
    </a>
  </li>
</template>

<script setup>
// Props for menu item
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: '#'
  }
})
</script>

<style lang="scss">
.menu-link {
  font-family: $font-varta;
  color: $brown-light;
  
  &:hover {
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $brown-light;
    transition: width 0.3s ease-out;
  }
  
  &:hover::after {
    width: 100%;
  }
}
</style>