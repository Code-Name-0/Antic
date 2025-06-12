<template>
    <header class="absolute top-0 left-0 right-0 z-50 w-full">
      <div class="header-container flex items-center justify-between">
        <div class="flex gap-32 items-center">
          <h1 class="logo-text font-bold tracking-[2px] text-[34px] leading-[25px] text-white">
            antic
          </h1>
          <nav class="desktop-nav hidden">
            <ul class="flex items-center list-none m-0 p-0 gap-8">
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Products</a></li>
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Rooms</a></li>
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Services</a></li>
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Inspirations</a></li>
            </ul>
          </nav>
        </div>

        <div class="contact hidden">
          <img :src="contactIcon" alt="contact" class="w-[50px] h-[50px] cursor-pointer" />
        </div>

        <div class="mobile-only cursor-pointer">
          <div class="flex flex-col gap-2.5">
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
          </div>
        </div>
      </div>
    </header>

</template>

<script setup>
import contactIcon from '~/assets/images/icons/contact.svg';
</script>

<style lang="scss">

.header-container {
  @include container;
  &{
    margin: 0;
  }
}

.logo-text {
  font-family: $font-merriweather;
  
  @include desktop {
    color: $terracotta;
  }
}

.mobile-only {
  @include desktop {
    display: none;
  }
}

.contact {
  @include desktop {
    display: block !important;
    
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
    }
  }
}

.desktop-nav {
  @include desktop {
    display: block !important;
  }
}

.nav-link {
  font-family: $font-varta;
  
  @include desktop {
    color: $brown-light;
    
    &:hover {
      color: $brown-light;
    }
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