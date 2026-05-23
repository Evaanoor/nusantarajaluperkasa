<template>
  <section class="w-full bg-[#221106] py-20 overflow-hidden font-unbounded">
    <div class="max-w-[1440px] mx-auto px-6 md:px-16">
      
      <div class="text-center mb-12">

        <p class="uppercase tracking-[3px] text-white text-[11px] md:text-sm mb-2 font-light">
          {{ mapData.subtitle }}
        </p>

        <h2 class="uppercase text-white font-bold tracking-[0.05em] leading-[1.3] text-[22px] md:text-[30px] max-w-[800px] mx-auto">
          {{ mapData.title }}
        </h2>
      </div>

      <div
        class="relative w-full aspect-[16/9] bg-contain bg-center bg-no-repeat"
        style="
          background-image: url('../../../../draft/mocks/images/global-globalization-world-map-environmental-concservation-concept 1.png');
        "
      >

        <div
          v-for="loc in mapData.locations"
          :key="loc.id"
          class="absolute w-0 h-0 z-10 hover:z-30"
          :style="{
            top: loc.top,
            left: loc.left,
          }"
        >
         
          <div class="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
            <div class="absolute w-[18px] h-[18px] bg-white/30 rounded-full animate-ping"></div>
            <div class="relative z-10 w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
          </div>


          <div
            v-if="loc.position === 'left' || loc.position === 'top-left' || loc.position === 'bottom-left'"
            class="hidden md:flex absolute right-[10px] top-1/2 -translate-y-1/2 items-center"
          >
            <div class="bg-white text-[#1b0d05] text-[10px] md:text-[12px] font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md whitespace-nowrap tracking-wide">
              {{ loc.country }}
            </div>

            <div class="w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white"></div>
          </div>

 
          <div
            v-if="loc.position === 'right' || loc.position === 'top-right' || loc.position === 'bottom-right'"
            class="hidden md:flex absolute left-[10px] top-1/2 -translate-y-1/2 items-center"
          >

            <div class="w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-white"></div>
            <div class="bg-white text-[#1b0d05] text-[10px] md:text-[12px] font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md whitespace-nowrap tracking-wide">
              {{ loc.country }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { fetchHomeContent } from '../../../services/api';
import { ref, onMounted } from 'vue';

const mapData = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchHomeContent();
    const data = response.data || response;
    mapData.value = data.world_map;
  } catch (err) {
    console.error('Error fetching home content:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.font-unbounded {
  font-family: 'Unbounded', sans-serif;
}

/* smoother glow */
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  70% {
    transform: scale(2.8);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.animate-ping {
  animation: pulseGlow 2s infinite;
}
</style>