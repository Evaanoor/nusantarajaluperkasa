<template>
  <section class="relative w-full h-[50vh] min-h-[380px] overflow-hidden bg-[#111111]">
    
    <div class="absolute inset-0">
      <img 
        :src="data.backgroundImage" 
        :alt="data.title" 
        class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#150d08] via-[#150d08]/60 to-transparent"></div>
    </div>

    <div class="relative z-10 h-full max-w-[1280px] mx-auto px-4 lg:px-[48px] flex flex-col justify-end pb-10">
      
      <nav class="mb-3 text-[#cfc1b6] text-[10px] uppercase font-medium tracking-[0.15em] font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2">
        <router-link to="/" class="hover:text-white transition-colors duration-300">HOME</router-link>
        <span>&gt;</span>
        <span class="text-white font-semibold">{{ data.title }}</span>
      </nav>

      <h1 class="font-['Unbounded',sans-serif] text-[26px] md:text-[30px] lg:text-[30px] font-black text-white uppercase leading-[1.1] mb-3 tracking-wide whitespace-pre-line">
        {{ data.title }}
      </h1>
      
    </div>
  </section>
</template>

<script setup>
import { fetchPageBanners } from '../../../services/api';
import { ref, onMounted } from 'vue';
const data = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchPageBanners();
    const res = response.data || response;
    data.value = { title: res?.contact?.title || 'Contact Us', subtitle: res?.contact?.subtitle || '', backgroundImage: res?.contact?.background_image || '' };
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>
