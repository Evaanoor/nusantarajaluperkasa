<template>
  <router-link 
    :to="{ name: 'ProductDetail', params: { slug: item.slug }}" 
    class="flex flex-col group cursor-pointer"
  >
    
    <div class="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-[#dfcdbe] shadow-sm group-hover:shadow-xl transition-shadow duration-300">
      
      <img 
        :src="item.primary_image_url" 
        :alt="item.name" 
        class="w-full h-full object-cover"
      />

      <img 
        :src="item.hover_image_url" 
        :alt="item.name + ' alternate view'" 
        class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      />
      
    </div>
    
    <h3 class="text-center mt-5 text-[#272727] text-[15px] font-bold font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#937864] transition-colors duration-300">
      {{ item.name }}
    </h3>
    
  </router-link>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>