<template>
    <div class="layout-services flex flex-col items-center justify-center gap-10">
        <div class="service-title-container flex flex-col items-start justify-center">
            <div class="service-title flex flex-col items-start text-left gap-8">
                <h2 class="service-title-text font-normal text-[35px] leading-10 tracking-[-0.3px] mb-4">We stay by your side to design your projects</h2>
                
                <UiActionLink href="#" text="Find out more" />
            </div>
        </div>

        <div class="services-container">
            <ServicesMain />
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.layout-services {
    background-color: $cream;
    @include container;
    

    .service-title-container {
        
        .service-title {
            
            .service-title-text {
                color: $brown-light;
                font-family: $font-merriweather;
                
            }
        }
    }

    @include desktop {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 25rem;
        padding-top: 8rem;
        padding-bottom: 6rem;
        
        .service-title-container {
            width: 50%;

            .service-title {
                .service-title-text {
                    font-family: $font-merriweather;
                    font-size: 60px;
                    line-height: 50px;
                    letter-spacing: -0.6px;
                }
            }
        }
        
        .services-container {
            width: 75%;
        }
    }
}
</style>
