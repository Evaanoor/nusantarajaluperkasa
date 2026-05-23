<template>
  <section 
    class="w-full py-20 md:py-28"
    style="background-color: rgba(236, 217, 203, 1);"
  >
    <div class="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">
        
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 relative group flex-shrink-0">
          <div 
            class="relative w-full aspect-[4/3] lg:aspect-[3/2] rounded-[16px] overflow-hidden"
            style="background-color: rgba(34, 17, 6, 1);"
          >
            <!-- Placeholder for image -->
            <img
              :src="philosophyData.image_url"
              :alt="philosophyData.title"
              class="w-full h-full object-cover rounded-[16px] opacity-0"
            />
          </div>
        </div>

        <!-- Text Section -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center lg:pl-4 py-1">
          <div>
            <h2 class="font-unbounded text-[#221106] uppercase font-medium text-[20px] md:text-[24px] leading-[1.3] tracking-wide mb-4">
              {{ philosophyData.title }}   
            </h2>

            <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[#221106] text-[14px] md:text-[15px] font-light leading-[1.5] mb-4 text-left opacity-80">
              {{ philosophyData.description }}
            </p>

            <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[#221106] text-[14px] md:text-[15px] font-light leading-[1.5] text-left opacity-80">
              {{ philosophyData.description2 }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { fetchAbout } from '../../../services/api';
import { ref, onMounted } from 'vue';

// Memanggil key philosophy dari file JSON
const philosophyData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchAbout();
    const res = response.data || response;
    philosophyData.value = res.philosophy;
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>