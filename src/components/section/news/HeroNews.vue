<template>
  <section class="relative w-full h-[50vh] min-h-[380px] overflow-hidden bg-[#111111]">
      <div class="absolute inset-0">
        <img 
          :src="heroData.background_image" 
          alt="News Banner" 
          class="w-full h-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#150d08] via-[#150d08]/60 to-transparent"></div>
      </div>

      <div class="relative h-full max-w-[1280px] mx-auto px-4 lg:px-[48px] flex flex-col justify-end pb-10 z-10">
        <nav class="mb-3 text-[#cfc1b6] text-[10px] uppercase font-medium tracking-[0.15em] font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2">
          <router-link to="/" class="hover:text-white transition-colors duration-300">HOME</router-link>
          <span>&gt;</span>
          <span class="text-white font-semibold">{{ heroData.title }}</span>
        </nav>

        <h1 class="font-unbounded text-[26px] md:text-[30px] lg:text-[30px] font-black text-white uppercase leading-[1.1] mb-3 tracking-wide whitespace-pre-line">
          {{ heroData.title }}
        </h1>

        <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] md:text-[11px] text-[#FFFFFF] max-w-[520px] leading-[1.7]">
          {{ heroData.description }}
        </p>
      </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchPageBanners } from '../../../services/api';

const heroData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchPageBanners();
    const res = response.data || response;
    heroData.value = {
      title: res?.news?.title || 'NEWS',
      description: res?.news?.description || '',
      background_image: res?.news?.background_image || ''
    };
  } catch (err) {
    console.error('Error fetching Hero News:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>