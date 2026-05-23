<template>
  <section 
    class="w-full py-20 md:py-28"
    style="background-color: rgba(236, 217, 203, 1);"
  >
    <div class="max-w-7xl mx-auto px-8 lg:px-[80px]">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
        
        <div class="flex flex-col gap-12">
          
          <div>
            <h2 class="text-[#1F1F1F] uppercase font-semibold text-[28px] md:text-[36px] tracking-[-0.03em] mb-4">
              {{ data.vision.title }}   
            </h2>
            <p class="text-[#4E4B48] text-[14px] md:text-[16px] leading-[1.8] text-justify">
              {{ data.vision.description }}
            </p>
          </div>

          <div>
            <h2 class="text-[#1F1F1F] uppercase font-semibold text-[28px] md:text-[36px] tracking-[-0.03em] mb-6">
              {{ data.mission.title }}   
            </h2>
            <ul class="flex flex-col gap-4">
              <li 
                v-for="(item, index) in data.mission.items" 
                :key="index"
                class="flex gap-4 text-[#4E4B48] text-[14px] md:text-[15px] leading-relaxed"
              >
                <span class="text-[#2A0D00] font-bold">0{{ index + 1 }}.</span>
                {{ item }}
              </li>
            </ul>
          </div>

        </div>

        <div class="w-full relative group lg:sticky lg:top-10">
          <div 
            class="relative w-full h-[350px] md:h-[500px] rounded-[14px] overflow-hidden shadow-xl"
            style="background-color: rgba(34, 17, 6, 1);"
          >
            <img
              :src="data.image_url"
              :alt="data.vision.title"
              class="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-105 opacity-95"
            />
          </div>
          <div class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#221106]/20 -z-10"></div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { fetchAbout } from '../../../services/api';
import { ref, onMounted } from 'vue';

// Mengambil data visionMission
const data = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchAbout();
    const res = response.data || response;
    data.value = res.visionMission;
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>