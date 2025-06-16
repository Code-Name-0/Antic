<template>

<div class="copyrights flex flex-col justify-center items-center gap-12 copyrights-container">

    
    <div class="social flex justify-center items-center gap-4">
        <img :src="FacebookIcon" alt="facebook" class="w-[35px] h-[35px] cursor-pointer" />
        <img :src="TwitterIcon" alt="twitter" class="w-[35px] h-[35px] cursor-pointer" />
        <img :src="LinkedInIcon" alt="linkedin" class="w-[35px] h-[35px] cursor-pointer" />
        <img :src="InstagramIcon" alt="instagram" class="w-[35px] h-[35px] cursor-pointer" />
    </div>

    <div class="legals flex flex-col gap-6 w-full md:flex-row md:justify-between md:items-center md:gap-4 lg:flex-row lg:justify-between lg:items-center lg:gap-4">
        <div class="mobile-only mobile-legals">
            <div class="flex justify-center items-center gap-x-6 gap-y-1 flex-wrap">
                <span class="cursor-pointer whitespace-nowrap">Terms of Service</span>
                <span class="cursor-pointer whitespace-nowrap">Privacy Policy</span>
                <span class="cursor-pointer whitespace-nowrap">Language</span>
            </div>
        </div>
        <div class="copyright font-normal text-lg leading-[25px] tracking-[0px] text-center md:text-left copyright-text">
            © 2021 Agence Dnd
        </div>

        <div class="desktop-only">
            <div class="flex flex-row justify-start items-center gap-8 flex-wrap">
                <span class="cursor-pointer whitespace-nowrap font-normal text-lg leading-[25px] tracking-[0px]">Terms of Service</span>
                <span class="cursor-pointer whitespace-nowrap font-normal text-lg leading-[25px] tracking-[0px]">Privacy Policy</span>
                <span class="cursor-pointer whitespace-nowrap font-normal text-lg leading-[25px] tracking-[0px]">Language</span>
            </div>
        </div>
    </div>
</div>

</template>


<script setup>

import FacebookIcon from '~/assets/images/icons/Facebook.svg';
import InstagramIcon from '~/assets/images/icons/Instagram.svg';
import TwitterIcon from '~/assets/images/icons/Twitter.svg';
import LinkedInIcon from '~/assets/images/icons/Linkedin.svg';
</script>


<style lang="scss">
.copyrights {
    font-family: $font-varta;
    color: $secondary-text;
}

.copyrights-container {
  // Below 400px - left align only text elements, keep socials centered
  @media (max-width: 399px) {
    
    .mobile-legals {
      width: 100%;
      
      > div {
        justify-content: flex-start !important;
        align-items: flex-start !important;
      }
    }
    
    .copyright-text {
      text-align: left !important;
    }
  }
}
</style>