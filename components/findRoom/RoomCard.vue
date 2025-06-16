<template>
    <div class="room-card w-full relative flex cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:opacity-90 h-[30vh] md:h-[40vh]" @click="handleClick">
        <div class="room-title absolute top-0 left-1/4 z-10 flex items-center justify-center w-1/2 h-full text-center font-normal text-[35px] leading-[40px] tracking-[-0.3px] md:text-[55px] md:leading-[60px] md:tracking-[-0.6px]">
            <h4>{{ roomName }}</h4>
        </div>
        <div 
            class="image-half w-1/2 h-full bg-cover bg-center bg-no-repeat"
            :style="`background-image: url(/images/rooms/${roomImage})`"
        ></div>
        
        <div class="text-half w-1/2 flex items-start justify-start px-8 bg-transparent">
            <div class="text-content text-left">
                <p class="room-description font-normal text-base leading-[22px] tracking-[0px]">{{ roomDescription }}</p>
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
    if (props.roomUrl && props.roomUrl !== '#') {
        navigateTo(props.roomUrl);
    } else {
        console.log(`Clicked on room: ${props.roomName}`);
    }
};

</script>

<style lang="scss">
.room-card {

    .room-title {
        font-family: $font-merriweather;
        color: $terracotta;
        
    }

    .room-description {
        font-family: $font-varta;
        color: $brown-light;
            }
}
</style>