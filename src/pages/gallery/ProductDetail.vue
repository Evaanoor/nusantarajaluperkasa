<template>
  <main class="min-h-screen bg-[#ECD9CB] pt-32 lg:pt-40 pb-20 px-4 md:px-8 lg:px-10 max-w-screen-2xl mx-auto">
    
    <div v-if="!isLoading && productData">

      <div class="w-full">
        <ProductImageSlider 
          v-if="productData?.images" 
          :images="productData?.images" 
        />
      </div>

      <div class="mt-12 w-full">
        <div class="w-full flex flex-col gap-8">
          <ProductShowcase :product="productData" />
        </div>
      </div>

      <div class="mt-12 block w-full clear-both">
        <RelatedProducts 
          :product-detail="productData" 
        />
      </div>

    </div>

    <div v-else-if="isLoading" class="flex justify-center items-center h-[60vh]">
      <span class="text-[#937864] font-medium text-lg animate-pulse">Memuat produk...</span>
    </div>

    <div v-else class="flex flex-col justify-center items-center h-[60vh] gap-4">
      <span class="text-red-500 font-medium text-lg text-center">Gagal memuat produk.</span>
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import ProductImageSlider from '../../components/section/product/ProductImageSlider.vue'; 
import ProductShowcase from '../../components/section/product/ProductShowcase.vue'; 
import RelatedProducts from '../../components/section/product/RelatedProducts.vue';

import { fetchProductDetail } from '../../services/api';

const route = useRoute();
const productData = ref(null);
const isLoading = ref(true);

const loadProduct = async (slug) => {
  try {
    isLoading.value = true;
    productData.value = null; 
    
    const response = await fetchProductDetail(slug);
    const data = response?.data || response;
    
    if (!data?.images || data?.images?.length === 0) {
      data.images = [];
      if (data?.primary_image_url) data.images.push(data.primary_image_url);
      if (data?.hover_image_url) data.images.push(data.hover_image_url);
      
      if (data.images.length === 1) {
        data.images.push('/draft/mocks/images/lamp-angle.jpeg');
      } else if (data.images.length === 0) {
        data.images = [
          '/draft/mocks/images/lamp.jpeg',
          '/draft/mocks/images/lamp-angle.jpeg'
        ];
      }
    }
    
    productData.value = data;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    if (error.response) {
      console.error("====== API GAGAL ======");
      console.error(`Status HTTP: ${error.response.status}`);
      console.error("Data dari Laravel:", error.response.data);
      console.error("=======================");
    } else {
      console.error("Gagal membaca data dari API (Network/CORS/Parse):", error);
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadProduct(route.params.slug);
});

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    loadProduct(newSlug);
  }
});
</script>