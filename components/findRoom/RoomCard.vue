<template>
    <div class="room-card w-full relative flex cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:opacity-90" @click="handleClick">
        <div class="room-title absolute top-0 left-1/4 z-10 flex items-center justify-center w-1/2 h-full text-center">
            <h4>{{ roomName }}</h4>
        </div>
        <div 
            class="image-half w-1/2 h-full bg-cover bg-center bg-no-repeat"
            :style="`background-image: url(/images/rooms/${roomImage})`"
        ></div>
        
        <div class="text-half w-1/2 flex items-start justify-start px-8 bg-transparent">
            <div class="text-content text-left">
                <p class="room-description">{{ roomDescription }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    roomName: {
        type: String,
        required: true
    },
    roomDescription: {
        type: String,
        required: true
    },
    roomImage: {
        type: String,
        required: true
    },
    roomUrl: {
        type: String,
        default: '#'
    }
});

const handleClick = () => {
    // Navigate to the room URL or emit an event
    if (props.roomUrl && props.roomUrl !== '#') {
        navigateTo(props.roomUrl);
    } else {
        // Emit event for parent to handle
        console.log(`Clicked on room: ${props.roomName}`);
    }
};

</script>

<style lang="scss">
.room-card {
    height: 30vh; 

    @include desktop {
        height: 40vh;
    } 

    .room-title {
        font-family: $font-merriweather;
        color: $terracotta;
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

    .room-description {
        font-family: $font-varta;
        color: $brown-light;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0px;
    }
}
</style>