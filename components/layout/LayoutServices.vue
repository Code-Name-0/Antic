<template>
    <div class="layout-services flex flex-col items-center justify-center gap-3">
        <div class="service-title-container flex flex-col items-start justify-center">
            <div class="service-title flex flex-col items-start text-left gap-4">
                <h2 class="service-title-text font-normal text-[35px] tracking-[-0.3px] mb-2">We stay by your side to design your projects</h2>
                
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
                line-height: 2.5rem; // equivalent to leading-10
            }
        }
    }

    @include tablet {
        gap: 4rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        
        .service-title-container {
            .service-title {
                .service-title-text {
                    font-size: 45px;
                    line-height: 1.25;
                    letter-spacing: -0.5px;
                }
            }
        }
    }
    
    @include medium {
        gap: 4.5rem;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        
        .service-title-container {
            .service-title {
                .service-title-text {
                    font-size: 48px;
                    line-height: 1.2;
                    letter-spacing: -0.4px;
                }
            }
        }
    }

    @include desktop {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
        padding-top: 3rem;
        padding-bottom: 4rem;
        
        .service-title-container {
            width: 50%;

            .service-title {
                .service-title-text {
                    font-family: $font-merriweather;
                    font-size: 60px;
                    line-height: 1.3 !important;
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
