<template>
    <div class="rooms-show-container flex flex-col relative h-80 md:h-96 lg:h-auto lg:min-h-80">
        <div 
            class="room-cards flex-1 flex flex-col justify-center relative overflow-hidden min-w-[300px] mx-auto max-w-[500px] md:max-w-[600px] lg:max-w-none lg:mx-0"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @mousedown="handleMouseDown"
            @mousemove="handleMouseMove"
            @mouseup="handleMouseUp"
            @mouseleave="handleMouseUp"
        >
            <Transition :name="slideDirection" mode="out-in">
                <div :key="currentPage" class="cards-grid flex gap-4 flex-col items-center md:gap-6 lg:flex-row lg:justify-start lg:items-stretch">
                    <FindRoomCard 
                        v-for="room in currentRooms"
                        :key="room.id"
                        :room-description="room.description" 
                        :room-image="room.image" 
                        :room-name="room.name"
                        :room-url="room.url"
                        class="lg:flex-1 lg:max-w-[calc(50%-0.5rem)]"
                    />
                </div>
            </Transition>
        </div>
        
        <div class="controls flex items-center py-4 max-w-[500px] md:max-w-[600px] mx-auto w-full lg:absolute lg:left-[-25%] lg:bottom-[-20%] lg:w-[30%] lg:z-10">
            <!-- Mobile layout: button left, counter right -->
            <div class="mobile-controls flex items-center justify-between w-full lg:hidden">
                <UiButton 
                    :disabled="false" 
                    @click="nextPage">
                    <div class="button-content flex flex-row justify-center items-center gap-2">
                        Next
                        <img src="~/assets/images/icons/Right.svg" alt="right arrow" class="arrow-icon w-1.5 h-2.5" />
                    </div>
                </UiButton>
                
                <div class="pages font-normal text-lg leading-[25px] tracking-[0px]">
                    <p>{{ currentPage }} / {{ totalPages }}</p>
                </div>
            </div>
            
            <!-- Desktop layout: counter left, button right -->
            <div class="desktop-controls hidden lg:flex items-center justify-between w-full">
                <div class="pages font-normal text-lg leading-[25px] tracking-[0px]">
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
    </div>
</template>

<script setup>

const currentPage = ref(1)
const slideDirection = ref('slide-next')

// Touch/swipe variables
const touchStartX = ref(0)
const touchEndX = ref(0)
const isDragging = ref(false)
const isMouseDown = ref(false)

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
    const isDesktop = window.innerWidth >= 1024 // lg: breakpoint in Tailwind (matches @include desktop)
    itemsPerPage.value = isDesktop ? 2 : 1
    
    if (currentPage.value > Math.ceil(rooms.value.length / itemsPerPage.value)) {
        currentPage.value = 1
    }
}

const nextPage = () => {
    slideDirection.value = 'slide-next'
    if (canGoNext.value) {
        currentPage.value++
    } else {
        currentPage.value = 1 
    }
}

const previousPage = () => {
    slideDirection.value = 'slide-previous'
    if (currentPage.value > 1) {
        currentPage.value--
    } else {
        currentPage.value = totalPages.value // Loop to last page
    }
}

// Touch event handlers
const handleTouchStart = (event) => {
    touchStartX.value = event.touches[0].clientX
    isDragging.value = true
}

const handleTouchMove = (event) => {
    if (!isDragging.value) return
    event.preventDefault()
}

const handleTouchEnd = (event) => {
    if (!isDragging.value) return
    
    touchEndX.value = event.changedTouches[0].clientX
    handleSwipe()
    isDragging.value = false
}

// Mouse event handlers for desktop
const handleMouseDown = (event) => {
    touchStartX.value = event.clientX
    isMouseDown.value = true
    isDragging.value = true
    event.preventDefault()
}

const handleMouseMove = (event) => {
    if (!isMouseDown.value || !isDragging.value) return
    event.preventDefault()
}

const handleMouseUp = (event) => {
    if (!isMouseDown.value || !isDragging.value) return
    
    touchEndX.value = event.clientX
    handleSwipe()
    isMouseDown.value = false
    isDragging.value = false
}

// Swipe logic
const handleSwipe = () => {
    const swipeThreshold = 50
    const swipeDistance = touchStartX.value - touchEndX.value
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swiped left - go to next page
            nextPage()
        } else {
            // Swiped right - go to previous page
            previousPage()
        }
    }
}


</script>

<style lang="scss"> 
.rooms-show-container {
   
    .slide-next-enter-active,
    .slide-next-leave-active,
    .slide-previous-enter-active,
    .slide-previous-leave-active {
        transition: transform 0.3s ease-in-out;
    }

    // Next slide animations (left swipe)
    .slide-next-enter-from {
        transform: translateX(100%);
    }

    .slide-next-leave-to {
        transform: translateX(-100%);
    }

    // Previous slide animations (right swipe)
    .slide-previous-enter-from {
        transform: translateX(-100%);
    }

    .slide-previous-leave-to {
        transform: translateX(100%);
    }

    .slide-next-enter-to,
    .slide-next-leave-from,
    .slide-previous-enter-to,
    .slide-previous-leave-from {
        transform: translateX(0);
    }

    .controls {
      
        .pages {
            font-family: $font-varta;
            color: $brown-light;
            
        }
    }
}
</style>