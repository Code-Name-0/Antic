<template>
  

    <div class="blog-container flex flex-col items-center justify-between gap-6 lg:items-start">
      <div class="blog-title max-w-[300px] text-center lg:text-left">
        <h2 class="font-semibold text-[25px] leading-[30px] tracking-[-0.2px]">We respect our planet</h2>
      </div>
      <div class="blog-image flex justify-center lg:justify-start">
        <img 
          src="/images/blog/post-1.jpg" 
          alt="Blog post"
          class="w-full max-w-[300px] h-48 object-cover rounded-md shadow-md"
        />
      </div>
      <div class="post-text text-center lg:text-left" style="max-width: 300px;">
        <p class="font-normal text-lg leading-[25px] tracking-[0px] max-w-[280px] text-justify" >
          We're taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly. We've set a number of goals to get us there. 
        </p>
      </div>
      <div class="action max-w-[300px] flex justify-center lg:justify-start">
        <UiActionLink href="#" text="Learn more"/>
      </div>
    </div>
</template>


<script setup>
</script>

<style lang="scss">
.blog-container {
  @include mobile {
    align-items: flex-start !important;
  }
}

.blog-title {
  font-family: $font-varta;
  color: $brown-dark;
  
  @include mobile {
    text-align: left !important;
  }
  
  @include desktop {
    max-width: 400px;
  }
}

.post-text {
  font-family: $font-varta;
  color: $secondary-text;
  
  @include mobile {
    text-align: left !important;
  }
}

.action {
  @include mobile {
    justify-content: flex-start !important;
  }
  
  @include desktop {
    max-width: 400px;
  }
}

.blog-image {
  @include mobile {
    justify-content: flex-start !important;
  }
  
  img {
    @include desktop {
      max-width: 400px;
      height: 200px;
    }
  }
}

</style>
