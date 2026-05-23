<template>
  <section class="bg-[#ecd9cb] py-24 px-8 md:px-24">
    <div class="max-w-7xl mx-auto flex flex-col gap-20">

      <!-- Featured Kiri atau data index ke 0 -->
      <FeatureNewsCard 
        v-if="newsData[0]" 
        :news="newsData[0]" 
        imagePosition="left" 
      />

      <!-- Grid 4 Kolom ata data index ke 1 sampai 4 -->
      <GridNewsList 
        v-if="newsData.length > 1" 
        :items="newsData.slice(1, 5)" 
      />

      <!-- Featured Kanan atau data index ke 5 -->
      <FeatureNewsCard 
        v-if="newsData[5]" 
        :news="newsData[5]" 
        imagePosition="right" 
      />

      <!-- grid Bawahnya atau data index ke 6 dst. -->
      <GridNewsList 
        v-if="newsData.length > 6" 
        :items="newsData.slice(6, 14)" 
      />

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchNews } from '../../../services/api';
import FeatureNewsCard from './FeatureNewsCard.vue';
import GridNewsList from './GridNewsList.vue';

const newsData = ref([]);

const loadNews = async () => {
  try {
    const response = await fetchNews();
    newsData.value = response.data || response;
  } catch (err) {
    console.error('Error:', err);
  }
};

onMounted(() => {
  loadNews();
});
</script>