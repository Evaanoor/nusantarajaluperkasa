<template>
  <section class="relative w-full h-[50vh] min-h-[380px] overflow-hidden bg-[#111111]">

    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroData.backgroundImage"
        alt="Hero Background"
        class="w-full h-full object-cover opacity-40"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/55"></div>
    </div>

    <!-- Content -->
    <!-- Content -->
    <div class="relative z-10 h-full max-w-[1280px] mx-auto px-4 lg:px-[48px] flex flex-col justify-end pb-10">

      <!-- Breadcrumb -->
      <nav class="mb-3 text-[#cfc1b6] text-[10px] uppercase font-medium tracking-[0.15em] font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2">
        <router-link to="/" class="hover:text-white transition-colors duration-300">HOME</router-link>
        <span>&gt;</span>
        <span class="text-white font-semibold">ABOUT US</span>
      </nav>

      <!-- Dynamic Title -->
      <h1
        class="font-unbounded text-[26px] md:text-[30px] lg:text-[30px] font-black text-white uppercase leading-[1.1] mb-3 tracking-wide whitespace-pre-line"
      >
        {{ heroData.title }}
      </h1>

    </div>
  </section>
</template>

<script setup>
import { fetchPageBanners } from '../../../services/api';
import { ref, onMounted } from 'vue';

const heroData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchPageBanners();
    const res = response.data || response;
    heroData.value = { title: res?.about?.title || 'About Us', backgroundImage: res?.about?.background_image || '' }
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>