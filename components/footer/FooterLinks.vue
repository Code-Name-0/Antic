<template>
  <div class="links-container" >

    <UiNavLinks title="About" >
      <div class="links-list-container">

        <ul>
          <UiNavLink label="Our story" />
          <UiNavLink label="Our stores" />
          <UiNavLink label="Our partners" />
        </ul>
        
      </div>

    </UiNavLinks>

    <UiNavLinks title="Services" >
      <div class="links-list-container">

        <ul>
          <UiNavLink label="Click and collect" />
          <UiNavLink label="Conception" />
          <UiNavLink label="Installation" />
          <UiNavLink label="Advices" />
          <UiNavLink label="Gift card" />
        </ul>
        
      </div>

    </UiNavLinks>

    <UiNavLinks title="Products" >
      <div class="links-list-container">

        <ul>
          <UiNavLink label="Furniture" />
          <UiNavLink label="Decoration" />
          <UiNavLink label="Storage" />
          <UiNavLink label="Baby and child" />
          <UiNavLink label="Connected home" />
        </ul>
        
      </div>

    </UiNavLinks>

    <UiNavLinks title="Rooms" >
      <div class="links-list-container">

        <ul>
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
  display: flex;
  flex-direction: column;
  gap: 2rem;


      .links-list-container {
        ul{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
    }

  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;

    .links-list-container {
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}
</style>
