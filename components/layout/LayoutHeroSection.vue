<template>
  <div class="hero-section relative h-screen w-full">
    <div class="hero-content-mobile relative h-full flex items-center justify-center px-6 lg:hidden">        <div class="hero-text-content flex flex-col items-center text-center text-white max-w-2xl mx-auto mt-[-50px] gap-8">
          <div class="hero-label mb-5">
            <span class="hero-label-text font-bold text-sm leading-5 tracking-wide text-center uppercase text-white">HOME DESIGN</span>
          </div>
          
          <h1 class="hero-title font-normal text-[35px] leading-10 tracking-[-0.3px] text-center w-[75%] text-white mb-6">
            Elegance for Interiors & Exteriors
          </h1>
          
          <p class="hero-paragraph font-normal text-lg leading-[25px] tracking-[0px] text-center text-white mb-12">
            We provide everyone with modern, trendy, quality furniture
          </p>
        
        <div class="scroll-icon cursor-pointer transition-transform duration-100 ease-in-out hover:translate-y-0.5">
          <img :src="scrollDownIcon" alt="scroll down" class="scroll-image w-12 h-12 object-contain transition-all duration-100 ease-in-out hover:scale-[1.01]" />
        </div>
      </div>
    </div>

    <div class="hero-content-desktop hidden lg:flex h-full">
      <div class="hero-left flex-1 bg-cream flex items-center min-h-screen">
        <div class="hero-text-container w-1/2">
          <div class="hero-text-content flex flex-col items-start text-left gap-8">
            <div class="hero-label mb-5">
              <span class="hero-label-text font-bold text-sm leading-5 tracking-wide uppercase">HOME DESIGN</span>
            </div>
            
            <h1 class="hero-title text-[35px] leading-10 tracking-[-0.3px] w-[55%] mb-6">
              Elegance for Interiors & Exteriors
            </h1>
            
            <p class="hero-paragraph font-normal text-lg leading-[25px] tracking-[0px] w-[60%]">
              We provide everyone with modern, trendy, quality furniture
            </p>
            
            <div class="scroll-icon cursor-pointer transition-transform duration-100 ease-in-out hover:translate-y-0.5">
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
  
}

.hero-label-text {
  font-family: $font-varta;
  
  
  @include desktop {
    color: $terracotta;
    text-align: left;
  }
}

.hero-title {
  font-family: $font-merriweather;
  
  
  @include desktop {
    text-align: left;
    font-weight: 300;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: -0.4px;
    color: $terracotta;
  }
}

.hero-paragraph {
  font-family: $font-varta;
  
  
  @include desktop {
    text-align: left;
    font-size: 22px;
    line-height: 30.8px;
    color: $brown-light;
  }
}
</style>
