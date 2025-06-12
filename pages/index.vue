<template>
  <div class="landing-page-layout">

    <section class="hero-with-header">

      <UiHeader />
      
      <SectionsHeroSection />

    </section>
    
    <main class="content-sections">
      <!-- Example content section with container -->
      <section class="section-container">
        <h2 class="text-2xl font-bold mb-4">Find Your Room</h2>
        <p class="text-gray-800">This content is now properly contained and aligned with the header.</p>
      </section>
      
      <!-- Another example section -->
      <section class="content-container bg-gray-100">
        <h2 class="text-2xl font-bold mb-4">We are by your side</h2>
        <p class="text-gray-800">This section also follows the same container alignment.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.landing-page-layout {
  min-height: 100vh;
}

.hero-with-header {
  position: relative;
  height: 100vh;
}

.hero-with-header header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.content-sections {
  position: relative;
  z-index: 1;
}
</style>




