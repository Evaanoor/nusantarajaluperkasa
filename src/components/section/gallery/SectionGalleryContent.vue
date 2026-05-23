<template>
  <section class="w-full py-16 md:py-24 bg-[#ECD9CB]">
    <div class="max-w-7xl mx-auto px-8 lg:px-[80px]">
      
      <div class="mb-10 flex justify-between items-end">
        <p class="text-[#312F2F] text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.1em] font-['Plus_Jakarta_Sans',sans-serif]">
          SHOWING 1-{{ galleries.length }} OF {{ totalItems }} RESULTS
        </p>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <span class="text-[#937864] font-medium animate-pulse">Loading gallery...</span>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        <GalleryCard 
          v-for="item in galleries" 
          :key="item.id"
          :item="item"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GalleryCard from './GalleryCard.vue'
import { fetchGalleries } from '../../../services/api'

const galleries = ref([])
const totalItems = ref(0)
const isLoading = ref(true)

const loadGalleries = async () => {
  try {
    isLoading.value = true
    const response = await fetchGalleries()
    
    // Handle response structure dari API
    const categories = response.data?.categories || response.categories || []
    const allProducts = categories.flatMap(cat => cat.items || [])
    
    galleries.value = allProducts
    totalItems.value = allProducts.length
  } catch (error) {
    console.error('Error loading galleries:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadGalleries()
})
</script>