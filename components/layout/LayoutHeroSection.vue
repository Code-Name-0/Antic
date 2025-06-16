<template>
  <div class="hero-section relative h-screen w-full">
    <div class="hero-content-mobile relative h-full flex items-center justify-center px-6 pt-16 lg:hidden">        
      
      <div class="hero-text-content flex flex-col items-center text-center mx-auto gap-3 w-full max-w-sm">
          <div class="hero-label">
            <span class="hero-label-text font-bold text-sm leading-5 tracking-wide text-center uppercase text-white">HOME DESIGN</span>
          </div>
          
          <h1 class="hero-title font-normal text-[35px] leading-10 tracking-[-0.3px] text-center text-white">
            Elegance for Interiors & Exteriors
          </h1>
          
          <p class="hero-paragraph font-normal text-lg leading-[25px] tracking-[0px] text-center text-white">
            We provide everyone with modern, trendy, quality furniture
          </p>
        
        <div class="scroll-icon cursor-pointer transition-transform duration-100 ease-in-out hover:translate-y-0.5 mt-2" @click="scrollToNextSection">
          <img :src="scrollDownIcon" alt="scroll down" class="scroll-image w-12 h-12 object-contain transition-all duration-100 ease-in-out hover:scale-[1.01]" />
        </div>
      </div>
    </div>

    <div class="hero-content-desktop hidden lg:flex h-full">
      <div class="hero-left flex-1 bg-cream flex items-center min-h-screen pt-16">
        <div class="hero-text-container w-1/2">
          <div class="hero-text-content flex flex-col items-start text-left gap-6">
            <div class="hero-label mb-3">
              <span class="hero-label-text font-bold text-sm leading-5 tracking-wide uppercase">HOME DESIGN</span>
            </div>
            
            <h1 class="hero-title text-[35px] leading-10 tracking-[-0.3px] w-[55%] mb-4">
              Elegance for Interiors & Exteriors
            </h1>
            
            <p class="hero-paragraph font-normal text-lg leading-[25px] tracking-[0px] w-[60%]">
              We provide everyone with modern, trendy, quality furniture
            </p>
            
            <div class="scroll-icon cursor-pointer transition-transform duration-100 ease-in-out hover:translate-y-0.5" @click="scrollToNextSection">
              <img :src="scrollDownTerracottaIcon" alt="scroll down" class="scroll-image-desktop w-10 h-10 object-contain transition-all duration-100 ease-in-out hover:scale-105 hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div class="hero-right flex-1 hero-bg-image min-h-screen">
      </div>
    </div>
  </div>
</template>

<script setup>
import scrollDownIcon from '~/assets/images/icons/scrollDown.svg'
import scrollDownTerracottaIcon from '~/assets/images/icons/scrollDown-terracotta.svg'

const scrollToNextSection = () => {
  const findRoomSection = document.querySelector('.find-room-section')
  if (findRoomSection) {
    findRoomSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style lang="scss">
.hero-section {
  background-image: url('~/assets/images/backgrounds/hero_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  
  @include desktop {
    background-image: none;
    background-color: transparent;
  }
}



.hero-bg-image {
  background-image: url('~/assets/images/backgrounds/hero_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

.hero-text-container {
  @include container;
  padding-right: 0;
}

.hero-label-text {
  font-family: $font-varta;
  
  @include tablet {
    font-size: 16px;
  }
  
  @include desktop {
    color: $terracotta;
    text-align: left;
  }
}

.hero-title {
  font-family: $font-merriweather;
  
  @include tablet {
    font-size: 42px;
    line-height: 1.2;
    letter-spacing: -0.35px;
  }
  
  @include medium {
    font-size: 45px;
    line-height: 1.1;
    letter-spacing: -0.35px;
  }
  
  @include desktop {
    text-align: left;
    font-weight: 300;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: -0.4px;
    color: $terracotta;
  }
  
  // Full width for 1024px to 1221px range
  @media (min-width: 1024px) and (max-width: 1220px) {
    width: 100% !important;
  }
  
  // Wider title width from 1221px onwards
  @media (min-width: 1221px) {
    width: 65% !important;
  }
  
  // Back to narrower width from 1740px onwards
  @media (min-width: 1740px) {
    width: 55% !important;
  }
}

.hero-paragraph {
  font-family: $font-varta;
  
  @include tablet {
    font-size: 20px;
    line-height: 28px;
  }
  
  @include medium {
    font-size: 21px;
    line-height: 29px;
  }
  
  @include desktop {
    text-align: left;
    font-size: 22px;
    line-height: 30.8px;
    color: $brown-light;
  }
}

.desktop-header {
  @include desktop {
    position: absolute !important;
  }
}

.header-container {
  padding-top: 1.5rem;
  @include container;
  
  @include desktop {
    padding-left: 0;
    padding-right: 3rem;
  }
}

.desktop-only {
  display: none;
  
  @include desktop {
    display: block;
  }
}

.mobile-only {
  display: block;
  
  @include desktop {
    display: none;
  }
}

.nav-link {
  font-family: $font-varta;
  color: white;
  
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
    background-color: currentColor;
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
    padding-top: 2rem;
    padding-bottom: 2rem;
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
      bottom: 0.5rem;
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

// Mobile menu transitions
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-out;
  transform-origin: top;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.8);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0) scaleY(1);
}
</style>
