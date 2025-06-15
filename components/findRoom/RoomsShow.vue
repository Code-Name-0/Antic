<template>
    <div class="rooms-show-container flex flex-col relative">
        <div class="room-cards flex-1 flex flex-col justify-center relative overflow-hidden min-w-[300px] mx-auto">
            <Transition name="slide" mode="out-in">
                <div :key="currentPage" class="cards-grid flex gap-4 flex-col items-center">
                    <FindRoomCard 
                        v-for="room in currentRooms"
                        :key="room.id"
                        :room-description="room.description" 
                        :room-image="room.image" 
                        :room-name="room.name"
                        :room-url="room.url" 
                    />
                </div>
            </Transition>
        </div>
        
        <div class="controls flex items-center justify-between py-4 max-w-[500px] mx-auto w-full">
            <div class="pages">
                <p>{{ currentPage }} / {{ totalPages }}</p>
            </div>
            
            <UiButton 
                :disabled="false" 
                @click="nextPage">
                <div class="button-content flex flex-row justify-center items-center gap-2">
                    Next
                    <img src="~/assets/images/icons/Right.svg" alt="right arrow" class="arrow-icon w-1.5 h-2.5" />
                </div>
            </UiButton>
        </div>
    </div>
</template>

<script setup>

const currentPage = ref(1)

const rooms = ref([
    { id: 1, name: "Bedroom", description: "New arrivals", image: "Bedroom.jpg", url: "/rooms/bedroom" },
    { id: 2, name: "Living Room", description: "New arrivals", image: "Livingroom.jpg", url: "/rooms/living-room" },
    { id: 3, name: "Modern Bedroom", description: "New arrivals", image: "Bedroom.jpg", url: "/rooms/modern-bedroom" },
    { id: 4, name: "Spacious Living", description: "New arrivals", image: "Livingroom.jpg", url: "/rooms/spacious-living" },
    { id: 5, name: "Master Bedroom", description: "New arrivals", image: "Bedroom.jpg", url: "/rooms/master-bedroom" },
    { id: 6, name: "Family Room", description: "New arrivals", image: "Livingroom.jpg", url: "/rooms/family-room" },
    { id: 7, name: "Guest Bedroom", description: "New arrivals", image: "Bedroom.jpg", url: "/rooms/guest-bedroom" },
    { id: 8, name: "Lounge Area", description: "New arrivals", image: "Livingroom.jpg", url: "/rooms/lounge-area" },
    { id: 9, name: "Children's Room", description: "New arrivals", image: "Bedroom.jpg", url: "/rooms/childrens-room" },
    { id: 10, name: "Entertainment Room", description: "New arrivals", image: "Livingroom.jpg", url: "/rooms/entertainment-room" }
])

// 1 per page on mobile, 2 per page on desktop
const itemsPerPage = ref(1) 
const totalPages = computed(() => Math.ceil(rooms.value.length / itemsPerPage.value))

const currentRooms = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value
    return rooms.value.slice(startIndex, startIndex + itemsPerPage.value)
})

const canGoNext = computed(() => currentPage.value < totalPages.value)

onMounted(() => {
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateItemsPerPage)
})

const updateItemsPerPage = () => {
    const isDesktop = window.innerWidth >= 1024 // $desktop breakpoint defined in _variables.scss
    itemsPerPage.value = isDesktop ? 2 : 1
    
    if (currentPage.value > Math.ceil(rooms.value.length / itemsPerPage.value)) {
        currentPage.value = 1
    }
}

const nextPage = () => {
    if (canGoNext.value) {
        currentPage.value++
    }else {
        currentPage.value = 1 
    }
}


</script>

<style lang="scss"> 

.rooms-show-container {
    height: 20rem; 
    
    @include desktop {
        height: auto;
        min-height: 20rem;
    }
    
    .room-cards {
        max-width: 500px;
        
        @include desktop {
            max-width: none;
            margin: 0;
        }
        
        .cards-grid {
            @include desktop {
                flex-direction: row;
                justify-content: flex-start;
                align-items: stretch;
                
                > * {
                    flex: 1;
                    max-width: calc(50% - 0.5rem);
                }
            }
        }
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.3s ease-in-out;
    }

    .slide-enter-from {
        transform: translateX(100%);
    }

    .slide-leave-to {
        transform: translateX(-100%);
    }

    .slide-enter-to,
    .slide-leave-from {
        transform: translateX(0);
    }

    .controls {
        @include desktop {
            position: absolute;
            left: -25%;
            bottom: -20%;
            width: 30%;
            z-index: 10;
        }

        .pages {
            font-family: $font-varta;
            color: $brown-light;
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0px;
        }
    }
}

</style>