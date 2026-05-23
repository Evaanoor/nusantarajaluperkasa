<template>
  <section class="w-full bg-[#E9D8CC] py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-8 lg:px-[80px]">
      
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">
        
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 relative group flex-shrink-0">
          <div 
            class="relative w-full aspect-[4/3] lg:aspect-[3/2] rounded-[16px] overflow-hidden"
            style="background-color: rgba(34, 17, 6, 1);"
          >
            <!-- Assuming logo png serves as placeholder -->
            <img
              :src="storyData.image_url"
              :alt="storyData.title"
              class="w-full h-full object-cover rounded-[16px] opacity-0" 
            />
          </div>
        </div>

        <!-- Text Section -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center lg:pl-4 py-1">
          <div>
            <h2 class="font-unbounded text-[#221106] uppercase font-medium text-[20px] md:text-[24px] leading-[1.3] tracking-wide mb-4">
              {{ storyData.title }}   
            </h2>

            <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[#221106] text-[14px] md:text-[15px] font-light leading-[1.5] text-left whitespace-pre-line opacity-80">
              {{ storyData.description }}
            </p>
          </div>

          <div>
            <a
              :href="storyData.file_url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-[#111111] text-[#ECD9CB] px-6 py-3 mt-8 rounded-md text-[13px] font-medium hover:bg-[#DAB49A] hover:text-[#221106] transition-colors duration-300"
            >
              {{ storyData.buttonText || 'Download Company Profile' }}
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { fetchAbout } from '../../../services/api';
import { ref, onMounted } from 'vue';

// Memanggil key history dari file JSON
const storyData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchAbout();
    const res = response.data || response;
    storyData.value = res.history;
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>