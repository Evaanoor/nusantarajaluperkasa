<template>
  <div class="relative w-full h-screen overflow-hidden group bg-neutral-900">

    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <img
        :src="getImageUrl(slide.image_url)"
        alt="Hero Banner"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="absolute inset-0 z-10"
      style="background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.81) 20.41%, rgba(0, 0, 0, 0.72) 40.45%, rgba(0, 0, 0, 0.63) 48.52%, rgba(0, 0, 0, 0.54) 56.36%, rgba(0, 0, 0, 0.45) 62.57%, rgba(0, 0, 0, 0.36) 68.79%, rgba(0, 0, 0, 0.27) 74.45%, rgba(0, 0, 0, 0.214615) 84.62%, rgba(0, 0, 0, 0.18) 92%, rgba(0, 0, 0, 0.09) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));"
    ></div>

    <div class="absolute left-6 md:left-16 lg:left-24 bottom-12 md:bottom-16 lg:bottom-20 z-20 flex flex-col items-start text-left text-white px-4 md:px-0">
      <h1 class="font-unbounded text-[28px] md:text-[48px] lg:text-[68px] font-bold leading-[0.95] text-white uppercase whitespace-pre-line mb-4 max-w-[700px]">
        {{ bannerTitle }}
      </h1>
      <button 
        @click="goGallery" 
        type="button" 
        class="px-5 py-2 text-[12px] bg-[#DAB49A] text-black font-medium rounded-[6px] hover:bg-[#937864] transition-colors duration-300"
      >
        {{ bannerButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchHeroBanners } from '../../../services/api'

const router = useRouter()
const slides = ref([])
const bannerTitle = 'WELCOME\nTO OUR\nIMAGINATION'
const bannerButtonText = 'Explore Collections'
const currentIndex = ref(0)
let autoPlayInterval = null

onMounted(async () => {
  try {
    const response = await fetchHeroBanners()
    slides.value = response.data || response
    startAutoPlay()
  } catch (err) {
    console.error('Error loading banners:', err)
  }
})

const getImageUrl = (path) => {
  if (path.startsWith('http') || path.startsWith('https')) {
    return path
  }
  if (path.startsWith('/storage')) {
    return `http://localhost:8000${path}`
  }
  return `/draft/mocks/images/${path}`
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const goGallery = () => {
  router.push('/gallery')
}

onUnmounted(() => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
})
</script>