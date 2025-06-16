<template>
    <div class="find-room-container flex flex-col gap-4">
        <div class="title">
            <p class="title-text font-normal text-[35px] leading-10 tracking-[-0.3px]">Find your room</p>
        </div>
        
        <div class="rooms-show flex flex-col gap-10">
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

    @include desktop {
        gap: 4rem;

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
            gap: 4rem;
            align-items: start;

            .description {
                display: flex;
                align-items: flex-start;
            }
        }
    }
}
</style>