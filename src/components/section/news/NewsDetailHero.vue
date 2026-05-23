<template>
  <section class="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
    
    <h1 class="font-['Unbounded',sans-serif] text-[32px] md:text-[40px] lg:text-[44px] font-black text-[#221106] leading-[1.1] mb-4 max-w-5xl uppercase">
      {{ title }}
    </h1>
    
    <p class="text-[13px] font-medium text-[#221106] opacity-70 mb-8">{{ date }}</p>

    <div class="w-full bg-[#E5D5C6] rounded-[8px] overflow-hidden shadow-sm">
      <img 
        :src="image" 
        alt="hero" 
        class="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105" 
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  date: { type: String, default: '' },
  image: { type: String, default: '' }
});
</script>