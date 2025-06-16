<template>
    <div class="inspirations-section-container bg-white">

        <div class="mobile-only">
            <div class="mobile-layout flex flex-col gap-6">
                
                <div class="inspirations-title">
                    <h2 class="title-text font-normal text-[35px] leading-[40px] tracking-[-0.3px]">Inspirations</h2>
                </div>
                
                <div class="inspiration-description">
                    <p class="description-text font-normal text-[18px] leading-[25px] tracking-[0px]">
                        Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.
                    </p>
                </div>
                <div class="examples">
                    <div class="examples-grid grid grid-cols-2 gap-8 max-w-sm mx-auto">
                        <div 
                            v-for="example in examples" 
                            :key="example.id"
                            class="example-item flex flex-col items-start gap-4"
                        >
                            <div class="example-image aspect-[3/4] overflow-hidden rounded-md">
                                <img 
                                    :src="example.image" 
                                    :alt="example.alt" 
                                    class="w-full h-full object-cover"
                                >
                            </div>
                            <div class="example-label">
                                <p class="label-text font-normal text-[15px] leading-[20px] tracking-[0px] capitalize text-left mt-2">
                                    {{ example.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="desktop-only">
            <div class="desktop-layout flex flex-col gap-12">
                
                <div class="examples-slideshow">
                    <div class="slideshow-container relative w-full overflow-hidden">
                        <div 
                            class="slideshow-track flex w-max h-full transition-transform duration-500 ease-in-out"
                            :style="{ transform: `translateX(-${currentSlide * slideWidth}vw)` }"
                        >
                            <div 
                                v-for="(example, index) in examples" 
                                :key="example.id"
                                class="slide-item flex-shrink-0 relative mr-12"
                                style="flex-basis: 30vw"
                            >
                                <img 
                                    :src="example.image" 
                                    :alt="example.alt" 
                                    class="slide-image w-full object-cover"
                                    style="aspect-ratio: 5/6"
                                >

                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="content-row flex items-start gap-8  ">
                    
                    <div class="content-section flex flex-row items-start gap-35">
                        
                        <div class="inspirations-title w-fit">
                            <h2 class="title-text-desktop font-light text-[45px] leading-[40px] tracking-[-0.3px] whitespace-nowrap">
                                Inspirations
                            </h2>
                        </div>
                        
                        <div class="inspiration-description w-[35%]">
                            <p class="description-text-desktop font-normal text-[18px] leading-[25px] tracking-[0px]">
                                Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.
                            </p>
                        </div>
                    </div>
                    
                    <div class="slideshow-controls flex flex-col items-center gap-4">
                        <div class="navigation-buttons flex gap-2">
                            <button class="nav-btn w-12 h-12 cursor-pointer transition-all duration-300 ease-in-out" @click="previousSlide">
                                <img src="~/assets/images/icons/LeftCircle.svg" alt="Previous" class="w-[90%]">
                            </button>
                            <button class="nav-btn w-12 h-12 cursor-pointer transition-all duration-300 ease-in-out" @click="nextSlide">
                                <img src="~/assets/images/icons/RightCircle.svg" alt="Next" class="w-[90%]">
                            </button>
                        </div>
                        <div class="page-counter">
                            <span class="counter-text font-normal text-lg leading-[25px] tracking-normal">{{ currentSlide + 1 }} / {{ totalSlides + 1 }}</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const examples = [
    {
        id: 1,
        name: 'Chair',
        image: '/images/examples/chair.jpg',
        alt: 'Chair'
    },
    {
        id: 2,
        name: 'Kitchen',
        image: '/images/examples/kitchen.jpg',
        alt: 'Kitchen'
    },
    {
        id: 3,
        name: 'Living Room',
        image: '/images/examples/livingRoom.jpg',
        alt: 'Living Room'
    },
    {
        id: 4,
        name: 'Tables',
        image: '/images/examples/tables.jpg',
        alt: 'Tables'
    }
]

const currentSlide = ref(0)
const totalSlides = ref(examples.length - 1 - 1) // the extra -1 is because we see two images at a time, total - 1 is we see one
const slideWidth = ref(30) // Each slide moves by 22vw

const nextSlide = () => {
    if (currentSlide.value < totalSlides.value) {
        currentSlide.value++
    }
}

const previousSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--
    }
}
</script>


<style lang="scss">
.inspirations-section-container {
    @include container;
    
    
    .examples{
        margin: auto;
    }
    
    .title-text {
        font-family: $font-merriweather;
        color: $brown-dark;
        
    }
    
    .description-text {
        font-family: $font-varta;
        color: $brown-light;
        
    }
    
    .label-text {
        font-family: 'Lato', sans-serif;
        color: $primary-text;
        
    }
    
    .title-text-desktop {
        font-family: $font-merriweather;
        font-weight: 300;
        color: $brown-dark;
    }
    
    .description-text-desktop {
        font-family: $font-varta;
        color: $brown-light;
    }
    
    .counter-text {
        font-family: $font-varta;
        color: $brown-light;
    }
    
    .examples-slideshow {
        margin-right: calc(-50vw + 50%);
        width: calc(100% + 50vw - 50%);
        position: relative;
    }
    
   

}</style>