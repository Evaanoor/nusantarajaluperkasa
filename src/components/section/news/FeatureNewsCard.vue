<template>
  <div class="flex flex-col lg:flex-row gap-8 items-center">
    
    <!-- Kotak Gambar -->
    <div 
      class="w-full lg:w-[60%] aspect-video lg:aspect-[4/3] bg-[#221106] rounded-md overflow-hidden shadow-lg relative"
      :class="imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'"
    >
      <img 
        v-if="news?.thumbnail_url" 
        :src="news.thumbnail_url" 
        :alt="news.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Area Teks -->
    <div 
      class="w-full flex flex-col items-start"
      :class="[
        imagePosition === 'right' 
          ? 'lg:order-1 lg:w-auto lg:max-w-[380px] lg:ml-auto lg:pr-4' 
          : 'lg:order-2 lg:w-[40%] lg:pl-6'
      ]"
    >
      <h2 class="font-unbounded text-[22px] lg:text-[28px] font-bold text-[#221106] leading-[1.2] mb-4">
        {{ news?.title }}
      </h2>
      <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[#221106]/70 text-[12px] lg:text-[13px] font-normal leading-[1.6] mb-6">
        {{ news?.excerpt }}
      </p>
      
      <router-link 
        :to="`/news/${news?.slug}`"
        class="bg-[#221106] text-[#ECD9CB] px-6 py-2.5 rounded text-[12px] font-medium hover:bg-[#DAB49A] hover:text-[#221106] transition-colors duration-300"
        :class="imagePosition === 'right' ? 'lg:self-end' : ''"
      >
        Read More
      </router-link>
    </div>

  </div>
</template>

<script setup>
defineProps({
  news: Object,
  imagePosition: {
    type: String,
    default: 'left' 
  }
})
</script>