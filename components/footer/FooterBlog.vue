<template>
  

    <div class="blog-container flex flex-col items-start justify-between gap-8 max-w-[500px]">
      <div class="blog-title">
        <h2 class="font-semibold text-[25px] leading-[30px] tracking-[-0.2px]">We respect our planet</h2>
      </div>
      <div class="blog-image">
        <img 
          src="/images/blog/post-1.jpg" 
          alt="Blog post"
          class="w-full max-w-[600px] shadow-md"
        />
      </div>
      <div class="post-text">
        <p class="font-normal text-lg leading-[25px] tracking-[0px]">
          We're taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly. We've set a number of goals to get us there. 
        </p>
      </div>
      <div class="action">
        <UiActionLink href="#" text="Learn more"/>
      </div>
    </div>
</template>


<script setup>
</script>

<style lang="scss">
.blog-title {
  font-family: $font-varta;
  color: $brown-dark;
  
}

.post-text {
  font-family: $font-varta;
  color: $secondary-text;
  
}

</style>
