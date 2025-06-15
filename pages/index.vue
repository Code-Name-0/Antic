<template>
  <div class="landing-page-layout min-h-screen">
    <main class="main-content relative z-[1] flex flex-col gap-10">
      <section class="hero-section relative h-screen">
        <SectionsHeroSection />
      </section>

      <section class="find-room-section relative">
        <LayoutFindRoom />
      </section>

      <section class="services-section relative ">
        <LayoutServices />
      </section>
      

      
      <section class="content-container bg-gray-100">
        <h2 class="text-2xl font-bold mb-4">We are by your side</h2>
        <p class="text-gray-800">This section also follows the same container alignment.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import LayoutFindRoom from '~/components/layout/LayoutFindRoom.vue';

</script>

<style lang="scss">
</style>




