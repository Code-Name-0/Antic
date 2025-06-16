<template>
  <div class="landing-page-layout min-h-screen">
    <main class="main-content relative z-[1] flex flex-col gap-10">
      <section class="hero-section relative h-screen">
        <LayoutHeroSection />
      </section>

      <section class="find-room-section relative">
        <LayoutFindRoom />
      </section>

      <section class="services-section relative ">
        <LayoutServices />
      </section>
      
      <div> 
        <!-- I added this div to avoid the gap between the two sections, because these have white bg -->

        <section class="subscribe-section relative"> 
          <LayoutSubscribe />
        </section>
        
        <section class="inspirations-section relative"> 
          <LayoutInspirations />
        </section>
        
      </div>


    </main>
  </div>
</template>

<script setup>
import LayoutFindRoom from '~/components/layout/LayoutFindRoom.vue';

</script>

<style lang="scss">
</style>




