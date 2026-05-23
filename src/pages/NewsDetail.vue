<template>
  <main class="min-h-screen bg-[#ECD9CB] pt-24 lg:pt-28 pb-20 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
    
    <div v-if="!isLoading && newsData">
      
      <NewsDetailHero
        :title="newsData?.title"
        :date="newsData?.published_at"
        :image="newsData?.main_image"
      />

      <NewsDetailBody 
        :paragraphs1="newsData?.content?.paragraphs_1 || []"
        :paragraphs2="newsData?.content?.paragraphs_2 || []"
        :quote="newsData?.content?.quote || ''"
        :sideImage="newsData?.side_image"
        :related-articles="newsData?.related_articles || []"
      />

    </div>

    <div v-else-if="isLoading" class="flex justify-center items-center h-[60vh]">
      <span class="text-[#937864] font-medium text-lg animate-pulse">Memuat artikel...</span>
    </div>

    <div v-else class="flex flex-col justify-center items-center h-[60vh] gap-4">
      <span class="text-red-500 font-medium text-lg text-center">Gagal memuat artikel. <br/> Cek Console (F12) untuk detail error dari server.</span>
      <button @click="loadNewsDetail" class="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">Coba Lagi</button>
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import NewsDetailHero from '../components/section/news/NewsDetailHero.vue';
import NewsDetailBody from '../components/section/news/NewsDetailBody.vue';
import { fetchNewsDetail } from '../services/api';

const route = useRoute();
const newsData = ref(null);

const isLoading = ref(true);

const loadNewsDetail = async () => {
  try {
    isLoading.value = true;
    newsData.value = null;
    const paramSlug = route.params.id;
    const response = await fetchNewsDetail(paramSlug);
    newsData.value = response?.data || response;
  } catch (err) {
    if (err.response) {
      console.error("====== API GAGAL ======");
      console.error(`Status HTTP: ${err.response.status}`);
      console.error("Data dari Laravel:", err.response.data);
      console.error("=======================");
    } else {
      console.error('Error fetching News Detail:', err);
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadNewsDetail();
});

watch(() => route.params.id, () => {
  loadNewsDetail();
});
</script>