<template>
  <section class="w-full bg-[#ecd9cb] text-[#2a1408] py-12 md:py-16 lg:py-16 overflow-hidden">
    
    <div class="max-w-[1140px] mx-auto w-full">

      <div class="max-w-2xl mb-10 md:mb-12">
        <span class="block font-['Font_2',sans-serif] text-[16px] font-light leading-normal tracking-normal uppercase text-[#221106] mb-3">
          OUR PRODUCT
        </span>
        <h2 class="font-['Unbounded',sans-serif] text-[30px] leading-normal md:text-[46px] md:leading-[1.2] font-normal uppercase text-[#221106] tracking-tight max-w-[7ch]">
          OUR COLLECTION
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
        <div
            v-for="product in products"
            :key="product.id"
            class="flex flex-col items-center w-full group"
          >
          <router-link :to="`/product/${product.slug}`" class="relative w-full aspect-[515/400] rounded-[10px] overflow-hidden bg-[#d8c4b4] shadow-md block cursor-pointer">
            
            <img
              :src="product.primary_image_url"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
            
            <img
              :src="product.hover_image_url || product.primary_image_url"
              :alt="product.name"
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
            
          </router-link>
          
          <router-link :to="`/product/${product.slug}`" class="mt-5 inline-flex items-center justify-center bg-transparent px-6 py-2 text-[18px] font-normal leading-[1.2] tracking-[0.05em] text-center text-[#221106] capitalize transition-colors duration-300 hover:text-[#937864] cursor-pointer">
            {{ product.name }}
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { fetchHomeContent } from '../../../services/api';
import { ref, onMounted } from 'vue';

const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchHomeContent();
    const data = response.data || response;
    products.value = data.our_products.slice(0, 3);
  } catch (err) {
    console.error('Error fetching home content:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>