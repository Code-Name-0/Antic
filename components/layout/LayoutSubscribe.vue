<template>
    <div class="subscribe-container bg-white">

      <div class="mobile-only">

          <div class="mobile-layout flex flex-col items-center gap-4">

              <div class="content-section flex flex-col  gap-3 w-full">
                <h2 class="subscribe-title font-normal text-[35px] leading-10 tracking-[-0.3px] text-left">Be aware of the latest trends</h2>
                <p class="subscribe-description text-left">
                  Stay informed of new trends, but also of our various offers.
                </p>
                <div class="flex justify-start">
                  <UiActionLink href="#" text="Learn more" />
                </div>
              </div>
              
              <div class="form-section flex flex-col gap-3 w-full max-w-sm">
                <input 
                  type="email" 
                  placeholder="email@address.com" 
                  class="email-input w-full px-4 py-3 rounded-md focus:outline-none border-none"
                  v-model="email"
                />


                <UiButton 
                  text="Subscribe" 
                  :onClick="handleSubscribe"
                  variant="filled"
                  :showIcon="false"
                  customClass="w-full"
                  backgroundColor="white"
                />

              </div>
            </div>
      </div>

      <div class="desktop-only">
        <div class="desktop-layout flex flex-row  items-center justify-between gap-6">


          <div class="content-section flex flex-col items-start justify-center gap-4">

            <h2 class="subscribe-title font-normal text-[35px] leading-10 tracking-[-0.3px]">Be aware of the latest trends</h2>

            <p class="subscribe-description">
              Stay informed of new trends, but also of our various offers.
            </p>
  
            <UiActionLink href="#" text="Learn more"  />
  
          </div>
              
          <div class="form-section flex gap-3">
            <input 
                  type="email" 
                  placeholder="email@address.com" 
                  class="email-input px-4 py-3 rounded-[5px] focus:outline-none text-left border-none"
                  v-model="email"/>
                  
                
            <UiButton 
              text="Subscribe" 
              @click="handleSubscribe"
              variant="filled"
              customClass="whitespace-nowrap rounded-[20px] !w-[10rem]"/>

                
          </div>


        </div>
      </div>
      
    </div>

</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribing email:', email.value)
    alert(`Subscribed with email: ${email.value}`)
    email.value = ''
  }
}
</script>

<style lang="scss">
.subscribe-container {
    @include container;
    
    @include mobile {
        padding-bottom: 0rem;
        padding-top: 3rem;
    }

     @include tablet {
        padding-bottom: 0rem;
        padding-top: 3rem;
    }

    .content-section{
      @include tablet {
        align-items: center;
      }
    }
}

.subscribe-title {
    font-family: $font-merriweather;
    color: $primary-text;
    
    @include tablet {
        font-size: 32px;
        line-height: 38px;
        letter-spacing: -0.25px;
        text-align: center;
    }
    
    @include desktop {
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;
        text-align: left;
    }
}

.subscribe-description {
    font-family: $font-varta;
    color: $secondary-text;
    
    @include tablet {
        font-size: 19px;
        line-height: 26px;
        text-align: center;
    }
    
    @include desktop {
        font-size: 20px;
        line-height: 28px;
        text-align: left;
    }
}

.email-input {
    font-family: $font-varta;
    background-color: $cream-light;
    
    
    &:focus {
        box-shadow: 0 0 0 2px rgba($cream, 1);
    }
    
    &::placeholder {
        color: $brown-light;
        font-family: Varta;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0px;
    }
    
    @include desktop {
        width: 280px;
    }
}

.subscribe-button {
    font-family: $font-varta;
    background-color: $terracotta;
    

}


</style>
