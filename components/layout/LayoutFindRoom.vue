<template>
    <div class="find-room-container flex flex-col gap-4">
        <div class="title">
            <p>Find your room</p>
        </div>
        
        <div class="rooms-show flex flex-col gap-10">
            <div class="description">
                <p>Dining room, bedroom, bathroom or office. Find what you need</p>
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
    
    .title p {
        font-family: $font-merriweather;
        color: $brown-light;
        font-weight: 400;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;

        @include desktop {
            font-size: 55px;
            line-height: 60px;
            letter-spacing: -0.6px;
        }
    }

    .rooms-show {
        @include desktop {
            display: grid;
            grid-template-columns: 1fr 5fr;
            gap: 4rem;
            align-items: start;
        }

        .description {
            @include desktop {
                display: flex;
                align-items: flex-start;
            }

            p {
                font-family: $font-varta;
                color: $brown-light;
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
                letter-spacing: 0px;
            }
        }
    }

    @include desktop{
        gap: 4rem;

        .title p {


            font-size: 55px;
            line-height: 60px;
            letter-spacing: -0.6px;
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