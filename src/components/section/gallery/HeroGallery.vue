<template>
  <section class="relative w-full h-[50vh] min-h-[380px] overflow-hidden bg-[#111111]">
    <div class="absolute inset-0">
      <img 
        :src="header.banner" 
        class="w-full h-full object-cover opacity-50" 
        alt="Gallery showcase"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/90 via-[#1a0f08]/40 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/60 to-transparent"></div>

    <div class="relative h-full max-w-[1280px] mx-auto px-4 lg:px-[48px] flex flex-col justify-end pb-10 z-10">
      <nav class="mb-3 text-[#cfc1b6] text-[10px] uppercase font-medium tracking-[0.15em] font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2">
        <router-link to="/" class="hover:text-white transition-colors duration-300">HOME</router-link>
        <span>&gt;</span>
        <span class="text-white font-semibold">{{ header.title }}</span>
      </nav>

      <h1 class="font-unbounded text-[28px] md:text-[30px] font-black text-white uppercase mb-3 tracking-wide leading-none">
        {{ header.title }}
      </h1>

      <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] md:text-[11px] text-[#FFFFFF] max-w-[520px] leading-[1.7]">
        {{ header.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { fetchPageBanners } from '../../../services/api';
import { ref, onMounted } from 'vue';

const header = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchPageBanners();
    const res = response.data || response;
    header.value = { title: res?.gallery?.title || 'Gallery', description: res?.gallery?.description || '', banner: res?.gallery?.background_image || '' };
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>