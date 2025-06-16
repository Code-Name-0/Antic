<template>
  <div class="links-container flex flex-col gap-6 text-center md:flex-row md:flex-wrap md:justify-center md:gap-8 md:text-left lg:flex-row lg:justify-between lg:items-start lg:gap-12">

    <UiNavLinks title="About">
      <div class="links-list-container">
        <ul class="flex flex-col gap-1 md:gap-2 lg:gap-3">
          <UiNavLink label="Our story" />
          <UiNavLink label="Our stores" />
          <UiNavLink label="Our partners" />
        </ul>
      </div>
    </UiNavLinks>

    <UiNavLinks title="Services">
      <div class="links-list-container">
        <ul class="flex flex-col gap-1 md:gap-2 lg:gap-3">
          <UiNavLink label="Click and collect" />
          <UiNavLink label="Conception" />
          <UiNavLink label="Installation" />
          <UiNavLink label="Advices" />
          <UiNavLink label="Gift card" />
        </ul>
      </div>
    </UiNavLinks>

    <UiNavLinks title="Products">
      <div class="links-list-container">
        <ul class="flex flex-col gap-1 md:gap-2 lg:gap-3">
          <UiNavLink label="Furniture" />
          <UiNavLink label="Decoration" />
          <UiNavLink label="Storage" />
          <UiNavLink label="Baby and child" />
          <UiNavLink label="Connected home" />
        </ul>
      </div>
    </UiNavLinks>

    <UiNavLinks title="Rooms">
      <div class="links-list-container">
        <ul class="flex flex-col gap-1 md:gap-2 lg:gap-3">
          <UiNavLink label="Living room" />
          <UiNavLink label="Dining Room" />
          <UiNavLink label="Cooked" />
          <UiNavLink label="Bedroom" />
          <UiNavLink label="Bathroom" />
          <UiNavLink label="Office" />
          <UiNavLink label="Laundry" />
          <UiNavLink label="Garage" />
        </ul>
      </div>
    </UiNavLinks>

  </div>
</template>

<script setup>
</script>

<style lang="scss">
.links-container {
  @media (max-width: 399px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
    align-items: flex-start;
    width: 100%;
    padding: 0 1rem;
  }
  
  @media (min-width: 400px) and (max-width: 639px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    text-align: center;
    justify-items: center;
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
    
    > * {
      width: 100%;
      max-width: 100%;
    }
  }
  
  @media (min-width: 640px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    text-align: center;
    justify-items: center;
    
    > * {
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>


