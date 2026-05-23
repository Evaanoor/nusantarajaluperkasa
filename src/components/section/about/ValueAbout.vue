<template>
  <section 
    class="w-full py-24 md:py-32 px-8 md:px-16 lg:px-24"
    style="background-color: rgba(34, 17, 6, 1);"
  >
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">
      
      <!-- Text Section -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 lg:pr-4 py-1">
        <div>
          <h2 class="text-[#ECD9CB] text-[20px] md:text-[24px] font-unbounded uppercase font-medium leading-[1.3] tracking-wide mb-4">
            {{ valueData.title }}
          </h2>

          <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[#ECD9CB]/80 text-[14px] md:text-[15px] font-light leading-[1.5] text-left">
            {{ valueData.description }}
          </p>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-full lg:w-1/2 order-1 lg:order-2 relative flex-shrink-0">
        <div 
          class="relative w-full aspect-[4/3] lg:aspect-[3/2] rounded-[16px] overflow-hidden"
          style="background-color: rgba(236, 217, 203, 1);"
        >
          <!-- Placeholder for image -->
          <img
            :src="valueData.image_url"
            :alt="valueData.title"
            class="w-full h-full object-cover rounded-[16px] opacity-0"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { fetchAbout } from '../../../services/api';
import { ref, onMounted } from 'vue';

// Ambil data dari key value di JSON
const valueData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchAbout();
    const res = response.data || response;
    valueData.value = res.value;
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* Tambahkan transisi halus jika diperlukan */
</style>