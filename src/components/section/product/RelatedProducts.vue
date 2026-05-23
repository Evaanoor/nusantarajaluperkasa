<template>
<section class="w-full bg-transparent pt-4 pb-0 px-0" v-show="displayProducts.length">

    <h2 class="text-lg md:text-2xl font-light text-[#221106] mb-8">
      Related Products
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

      <router-link
        v-for="(product, idx) in displayProducts"
        :key="product.id + '-' + idx"
        :to="`/product/${product.slug}`"
        class="flex flex-col items-center group cursor-pointer"
      >
        <div class="w-full rounded-[16px] overflow-hidden">
          <img
            :src="product.thumbnail_url"
            :alt="product.name"
            class="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>

        <div class="mt-5 text-center w-full">
          <h3 class="text-sm md:text-base font-light tracking-wide text-[#221106] transition-colors duration-300 group-hover:text-[#937864]">{{ product.name }}</h3>
        </div>
      </router-link>

    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { fetchGalleries } from '../../../services/api'

const props = defineProps({
  productDetail: {
    type: Object,
    required: true,
  },
})

const displayProducts = ref([])

const error = ref(null);
const loading = ref(false);

watch(() => props.productDetail, async (newDetail) => {
  if (!newDetail) return;
  
  loading.value = true;
  error.value = null;
  try {
    const response = await fetchGalleries();
    const data = response.data || response;
    
    const allProducts = [];
    if (data && data.categories) {
      data.categories.forEach(cat => {
        if (cat.items) {
          cat.items.forEach(item => {
            if (!allProducts.some(p => p.slug === item.slug)) {
              allProducts.push({
                id: item.id,
                name: item.name,
                slug: item.slug,
                thumbnail_url: item.primary_image_url || '/draft/mocks/images/lamp.jpeg'
              });
            }
          });
        }
      });
    }
    
    let available = allProducts.filter(p => p.slug !== newDetail.slug);
    available = available.sort(() => Math.random() - 0.5);
    displayProducts.value = available.slice(0, 4);
  } catch (err) {
    console.error("Gagal memuat related products:", err);
    error.value = "Gagal memuat produk terkait";
  } finally {
    loading.value = false;
  }
}, { immediate: true })
</script>