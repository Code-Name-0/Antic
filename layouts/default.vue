<template>
  <div class="app-layout min-h-screen relative">
    <header class="absolute top-0 left-0 right-0 z-50 w-full">
      <div class="header-container flex items-center justify-between pr-12 m-0">
        <div class="flex gap-25 items-center">
          <div class="desktop-only">
            <UiLogo />
          </div>
          <div class="mobile-only">
            <UiLogo color="white" />
          </div>

          <nav class="desktop-nav desktop-only">
            <ul class="flex items-center list-none m-0 p-0 gap-8">
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Products</a></li>
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Rooms</a></li>
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Services</a></li>
                <li class="m-0 p-0"><a href="#" class="nav-link font-medium text-base tracking-[0.5px] no-underline text-white relative transition-colors duration-300 ease-in-out">Inspirations</a></li>
            </ul>
          </nav>
        </div>

        <div class="contact desktop-only cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
          <img :src="contactIcon" alt="contact" class="w-[50px] h-[50px]" />
        </div>

        <div class="mobile-only cursor-pointer" @click="toggleMobileMenu">
          <div class="flex flex-col gap-2.5">
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out" :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"></span>
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out" :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"></span>
          </div>
        </div>
      </div>

      <Transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="mobile-nav-dropdown mobile-only fixed top-20 left-0 right-0 z-40">
          <div class="mobile-nav-content">
            <nav class="mobile-nav">
              <ul class="flex flex-col gap-6 p-0 m-0 list-none">
                <li><a href="#" class="mobile-nav-link font-medium text-lg tracking-[0.5px] no-underline transition-colors duration-300 ease-in-out" @click="closeMobileMenu">Products</a></li>
                <li><a href="#" class="mobile-nav-link font-medium text-lg tracking-[0.5px] no-underline transition-colors duration-300 ease-in-out" @click="closeMobileMenu">Rooms</a></li>
                <li><a href="#" class="mobile-nav-link font-medium text-lg tracking-[0.5px] no-underline transition-colors duration-300 ease-in-out" @click="closeMobileMenu">Services</a></li>
                <li><a href="#" class="mobile-nav-link font-medium text-lg tracking-[0.5px] no-underline transition-colors duration-300 ease-in-out" @click="closeMobileMenu">Inspirations</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </Transition>
    </header>

    <main class="main-content relative min-h-screen">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import contactIcon from '~/assets/images/icons/contact.svg'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  const handleClickOutside = (event) => {
    const mobileMenu = document.querySelector('.mobile-nav-dropdown')
    const hamburger = document.querySelector('.mobile-only.cursor-pointer')
    
    if (isMobileMenuOpen.value && mobileMenu && hamburger) {
      if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        closeMobileMenu()
      }
    }
  }

  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style lang="scss">
.header-container {
  @include container;
  padding-top: 2rem !important;

  @include desktop {
    padding-right: 4rem;
    padding-top: 1rem !important;
  }
  
  @media (min-width: 1024px) and (max-width: 1550px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem !important;
    
    .flex.gap-25 {
      gap: 1rem;
    }
    
    .desktop-nav ul {
      gap: 1.5rem;
    }
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

.mobile-nav-dropdown {
  background: rgba(83, 75, 66, 0.95); 
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(160, 96, 86, 0.3); 
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  .mobile-nav-content {
    @include container;
  }
  
  .mobile-nav-link {
    font-family: $font-varta;
    color: $cream;
    display: block;
    padding: 0.75rem 0;
    position: relative;
    
    &:hover {
      color: $terracotta;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $terracotta;
      transition: width 0.3s ease-out;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-in-out;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
