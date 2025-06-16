<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="w-full">
        <div class="flex flex-col gap-8 w-full">
          <div class="footer-content flex flex-col gap-12">
            <FooterLogo />
            <FooterLinks />
            <FooterBlog />
          </div>
          <div class="footer-copyrights">
            <FooterCopyrights />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>



<style lang="scss">
.site-footer {
  
  background-color: $cream;
  color: $text-white;
  
}

.footer-container {
  @include container;
  
  padding-top: 4rem;
  padding-bottom: 2rem;
  
  @include tablet {
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
  }
  
  @include desktop {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  
  .footer-content {
    
    @include desktop {
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      gap: 4rem;
    }
  }
}
</style>
