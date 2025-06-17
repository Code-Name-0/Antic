<template>
  <div class="landing-page-layout min-h-screen">
    <main class="main-content relative z-[1] flex flex-col">
      <section class="hero-section relative h-screen">
        <LayoutHeroSection />
      </section>

      <section class="find-room-section relative">
        <LayoutFindRoom />
      </section>

      <section class="services-section relative">
        <LayoutServices />
      </section>
      
      <section class="subscribe-section relative"> 
        <LayoutSubscribe />
      </section>
      
      <section class="inspirations-section relative"> 
        <LayoutInspirations />
      </section>


    </main>
  </div>
</template>

<script setup>
import LayoutFindRoom from '~/components/layout/LayoutFindRoom.vue';

</script>

<style lang="scss">
.main-content{
}
</style>




