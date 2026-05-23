<template>
  <main class="w-full bg-[#ECD9CB] min-h-screen">
    
    <HeroCategory 
      :title="categoryData.name" 
    />
    
    <section class="w-full py-16">
      <div class="max-w-7xl mx-auto px-8 lg:px-[80px]">
        
        <div class="mb-10 flex justify-between items-end" v-if="categoryData.items.length > 0">
          <p class="text-[#312F2F] text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.1em] font-['Plus_Jakarta_Sans',sans-serif]">
            SHOWING 1-{{ categoryData.items.length }} OF {{ categoryData.items.length }} RESULTS
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          <GalleryCard 
            v-for="item in categoryData.items" 
            :key="item.id"
            :item="item"
          />
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroCategory from '../../components/section/gallery/HeroCategory.vue'
import GalleryCard from '../../components/section/gallery/GalleryCard.vue'

// Import file API Contract
import { fetchGalleries } from '../../services/api'

const categoryData = ref({
  name: '',
  description: '',
  items: []
})

const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchGalleries();
    const data = response.data || response;
    const targetCategory = data.categories.find(cat => cat.id === 4);
    
    if (targetCategory) {
      categoryData.value = {
        name: targetCategory.name,
        description: "Kaca hias elegan dengan bingkai artistik untuk menyempurnakan ruang Anda.",
        items: targetCategory.items || []
      };
    }
  } catch (err) {
    console.error('Error fetching gallery:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
})
</script>