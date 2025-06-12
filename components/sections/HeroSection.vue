<template>
  <section class="hero-section relative h-screen w-full">
    <!-- Mobile: full image background -->
    <div class="hero-content-mobile relative h-full flex items-center justify-center px-6 lg:hidden">
      <div class="hero-text-content flex flex-col items-center text-center text-white max-w-2xl mx-auto mt-[-50px]">
        <div class="hero-label mb-5">
          <span class="text-white uppercase">HOME DESIGN</span>
        </div>
        
        <h1 class="hero-title text-white mb-6">
          Elegance for Interiors & Exteriors
        </h1>
        
        <p class="hero-paragraph text-white mb-12">
          We provide everyone with modern, trendy, quality furniture
        </p>
        
        <div class="scroll-icon">
          <img :src="scrollDownIcon" alt="scroll down" class="scroll-image" />
        </div>
      </div>
    </div>

    <!-- Desktop: split layout -->
    <div class="hero-content-desktop hidden lg:flex h-full">
      <!-- Left half: Cream background with content -->
      <div class="hero-left flex-1 bg-cream flex items-center">
        <div class="hero-text-container">
          <div class="hero-text-content flex flex-col items-start text-left">
            <div class="hero-label mb-5">
              <span class="text-primary uppercase">HOME DESIGN</span>
            </div>
            
            <h1 class="hero-title text-primary mb-6">
              Elegance for Interiors & Exteriors
            </h1>
            
            <p class="hero-paragraph text-secondary mb-12">
              We provide everyone with modern, trendy, quality furniture
            </p>
            
            <div class="scroll-icon">
              <img :src="scrollDownTerracottaIcon" alt="scroll down" class="scroll-image-desktop" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right half: Hero image background -->
      <div class="hero-right flex-1 hero-bg-image">
      </div>
    </div>
  </section>
</template>

<script setup>
import scrollDownIcon from '~/assets/images/icons/scrollDown.svg'
import scrollDownTerracottaIcon from '~/assets/images/icons/scrollDown-terracotta.svg'
</script>

<style lang="scss">

.mobile-only {
  @include mobile {
    display: block;
  }
  
  @include desktop {
    display: none;
  }
}

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

/* Desktop: Split background */
.hero-bg-image {
  background-image: url('~/assets/images/backgrounds/hero_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-left {
  min-height: 100vh;
}

.hero-right {
  min-height: 100vh;
}

/* Hero text container - aligns with site container */
.hero-text-container {

  width: 50%;

  @include container;
  
  // Move declarations before nested rules

  
  // @include desktop {
  //   padding-left: 0; // Ensure left alignment within the cream section
  //   margin-left: 0;
  // }
}

.hero-label span {
  font-family: $font-varta;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: center;
  
  @include desktop {
    color: $terracotta;
    text-align: left;
  }
}

.hero-title {
  font-family: $font-merriweather;
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;
  letter-spacing: -0.3px;
  text-align: center;
  
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
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  
  /* Desktop adjustments */
  @include desktop {
    text-align: left;
    font-size: 22px;
    line-height: 30.8px;
    color: $brown-light;
    // max-width: 400px;
  }
}

/* Scroll icon styles */
.scroll-icon {
  cursor: pointer;
  transition: transform 0.1s ease;
  
  &:hover {
    transform: translateY(2px);
  }
}

/* Mobile scroll image */
.scroll-image {
  width: 48px;
  height: 48px;
  object-fit: contain;
  transition: all 0.1s ease;
  
  &:hover {
    transform: scale(1.01);
  }
}

/* Desktop scroll image - smaller and terracotta colored */
.scroll-image-desktop {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: all 0.1s ease;
  
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.down-arrow {
  width: 16px;
  height: 16px;
}
</style>
