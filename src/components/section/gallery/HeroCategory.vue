<template>
  <section class="relative w-full h-[50vh] min-h-[380px] overflow-hidden bg-[#111111]">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        :src="image" 
        class="w-full h-full object-cover opacity-50" 
        alt="Category showcase"
      />
    </div>

    <!-- Gradient overlay for text readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/90 via-[#1a0f08]/40 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/60 to-transparent"></div>

    <div class="relative h-full max-w-[1280px] mx-auto px-4 lg:px-[48px] flex flex-col justify-end pb-10 z-10">
      <!-- Title -->
      <h1 class="font-unbounded text-[28px] md:text-[36px] font-black text-white uppercase mb-2 tracking-wide leading-none">
        {{ title }} COLLECTION
      </h1>

      <!-- Breadcrumb (Below Title) -->
      <nav class="text-[#cfc1b6] text-[10px] uppercase font-medium tracking-[0.15em] font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2">
        <router-link to="/" class="hover:text-white transition-colors duration-300">HOME</router-link>
        <span>&gt;</span>
        <router-link to="/gallery" class="hover:text-white transition-colors duration-300">GALLERY</router-link>
        <span>&gt;</span>
        <span class="text-white font-semibold">{{ title }}</span>
      </nav>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/draft/mocks/images/banner2.jpeg' // Default banner image for category
  }
})
</script>
