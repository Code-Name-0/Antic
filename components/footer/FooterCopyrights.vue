<template>

<div class="copyrights flex flex-col justify-center items-center gap-4">

    
    <div class="social flex justify-center items-center gap-4">
        <img :src="FacebookIcon" alt="facebook" class="w-[35px] h-[35px] cursor-pointer" />
        <img :src="TwitterIcon" alt="twitter" class="w-[35px] h-[35px] cursor-pointer" />
        <img :src="LinkedInIcon" alt="linkedin" class="w-[35px] h-[35px] cursor-pointer" />
        <img :src="InstagramIcon" alt="instagram" class="w-[35px] h-[35px] cursor-pointer" />
    </div>

    <div class="legals flex flex-col gap-8 w-full">
        <div class="flex justify-start items-center gap-4 flex-wrap hidden mobile-only">
            <span class="cursor-pointer whitespace-nowrap">Terms of Service</span>
            <span class="cursor-pointer whitespace-nowrap">Privacy Policy</span>
            <span class="cursor-pointer whitespace-nowrap">Language</span>
        </div>
        <div class="copyright">
            © 2021 Agence Dnd
        </div>
        <div class="flex justify-start items-center gap-4 flex-wrap hidden desktop-only">
            <span class="cursor-pointer whitespace-nowrap">Terms of Service</span>
            <span class="cursor-pointer whitespace-nowrap">Privacy Policy</span>
            <span class="cursor-pointer whitespace-nowrap">Language</span>
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


<style lang="scss" >
.desktop-only {
    @include desktop {
        display: flex;
    }
    
}
.mobile-only {
    @include mobile {
        display: flex;
    }
    
}
.copyrights {

    font-family: $font-varta;
    color: $secondary-text;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0px;
    .legals {
        @include desktop {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 16px;
            }
    }


    .copyright{

    }

    }


</style>