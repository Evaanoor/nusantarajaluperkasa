<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    
    <!-- Looping data berita kecil -->
    <router-link 
      v-for="item in items" 
      :key="item.id" 
      :to="`/news/${item.slug}`"
      class="group flex flex-col"
    >
      <!-- Kotak Putih (Thumbnail) -->
      <div class="w-full aspect-[4/3] bg-white rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <img 
          v-if="item.thumbnail_url" 
          :src="item.thumbnail_url" 
          :alt="item.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      <!-- Tanggal & Judul -->
      <p class="text-[8px] font-semibold text-[#221106]/50 mb-2 uppercase tracking-wider">
        {{ item.published_at }}
      </p>
      <h3 class="font-['Unbounded',sans-serif] text-[12px] font-bold text-[#221106] leading-snug group-hover:text-[#937864] transition-colors duration-300">
        {{ item.title }}
      </h3>
    </router-link>

  </div>
</template>

<script setup>
defineProps({
  items: Array
})
</script>