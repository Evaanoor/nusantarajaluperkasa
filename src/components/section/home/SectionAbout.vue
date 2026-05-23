<template>
  <section class="relative w-full bg-[#221106] overflow-hidden py-16 lg:py-24">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center">
      
      <div class="max-w-[480px] z-10">
        
        <span class="block font-['Unbounded',sans-serif] text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-[#ecd9cb] mb-3">
          {{ aboutData.menu_title }}
        </span>

        <h2 class="font-['Unbounded',sans-serif] text-[20px] md:text-[24px] leading-[1.3] font-bold uppercase tracking-tight text-white mb-5">
          {{ aboutData.main_heading }}
        </h2>

        <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] md:text-[12px] font-light leading-[1.8] text-white/70 mb-8 max-w-[400px]">
          {{ aboutData.content }}
        </p>

        <router-link
          to="/about"
          class="inline-flex items-center justify-center rounded-[4px] bg-[#ecd9cb] px-7 py-2.5 text-[11px] font-semibold text-[#221106] transition-all duration-300 hover:bg-white hover:text-black"
        >
          {{ aboutData.button_text }}
        </router-link>
      </div>

      <div class="hidden lg:block w-full h-[400px]"></div>

    </div>

    <div class="relative lg:absolute right-0 lg:top-1/2 lg:-translate-y-1/2 w-[90%] lg:w-[45vw] h-[300px] md:h-[350px] lg:h-[450px] rounded-l-[24px] overflow-hidden ml-auto mt-12 lg:mt-0 shadow-2xl z-0">
      <img 
        :src="aboutData.image_url" 
        :alt="aboutData.menu_title"
        class="w-full h-full object-cover"
      />
    </div>

  </section>
</template>

<script setup>
import { fetchHomeContent } from '../../../services/api';
import { ref, onMounted } from 'vue';

const aboutData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchHomeContent();
    const data = response.data || response;
    aboutData.value = data.about_us;
  } catch (err) {
    console.error('Error fetching home content:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>