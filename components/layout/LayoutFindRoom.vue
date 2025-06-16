<template>
    <div class="find-room-container flex flex-col gap-1">
        <div class="title">
            <p class="title-text font-normal text-[35px] leading-10 tracking-[-0.3px]">Find your room</p>
        </div>
        
        <div class="rooms-show flex flex-col gap-4">
            <div class="description">
                <p class="description-text font-normal text-lg leading-[25px] tracking-[0px]">Dining room, bedroom, bathroom or office. Find what you need</p>
            </div>

            <div class="rooms-content">
                <FindRoomRoomsShow />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.find-room-container {
    @include container;
    
    .title {
        .title-text {
            font-family: $font-merriweather;
            color: $brown-light;
            
        }
    }

    .rooms-show {
        
        .description {
            .description-text {
                font-family: $font-varta;
                color: $brown-light;
                
            }
        }
    }

    @include tablet {
        gap: 1.5rem;

        .title {
            .title-text {
                font-size: 45px;
                line-height: 50px;
                letter-spacing: -0.5px;
            }
        }

        .rooms-show {
            gap: 1.5rem;
        }
    }
    
    @include medium {
        gap: 1.25rem;

        .title {
            .title-text {
                font-size: 50px;
                line-height: 55px;
                letter-spacing: -0.55px;
            }
        }

        .rooms-show {
            gap: 1.25rem;
        }
    }

    @include desktop {
        gap: 1rem;

        .title {
            .title-text {
                font-size: 55px;
                line-height: 60px;
                letter-spacing: -0.6px;
            }
        }

        .rooms-show {
            display: grid;
            grid-template-columns: 1fr 5fr;
            gap: 1rem;
            align-items: start;

            .description {
                display: flex;
                align-items: flex-start;
            }
        }
    }
}
</style>