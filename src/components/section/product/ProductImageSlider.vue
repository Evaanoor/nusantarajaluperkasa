<template>
  <div class="w-full flex flex-col items-center gap-6">

      <!-- Main hero image -->
      <div class="relative">

        <!-- Desktop: arrows outside the image in the gutter -->
        <div class="hidden md:flex items-center justify-between gap-4">
          <div class="w-12 flex items-center justify-center">
            <button
              v-if="images.length > 1"
              @click="prev"
              class="w-10 h-10 bg-[#FFFFFF4D] backdrop-blur rounded-lg flex items-center justify-center text-[#221106] hover:bg-[#221106] hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>

          <div class="flex-1 bg-gray-100 rounded-2xl overflow-hidden">
            <img
              :src="currentImage"
              alt="Product"
              class="w-full h-[520px] md:h-[520px] object-cover"
            />
          </div>

          <div class="w-12 flex items-center justify-center">
            <button
              v-if="images.length > 1"
              @click="next"
              class="w-10 h-10 bg-[#FFFFFF4D] backdrop-blur rounded-lg flex items-center justify-center text-[#221106] hover:bg-[#221106] hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile: keep small overlay arrows on top of image -->
        <div class="md:hidden relative bg-gray-100 rounded-2xl overflow-hidden">
          <button
            v-if="images.length > 1"
            @click="prev"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#FFFFFF4D] backdrop-blur rounded-lg flex items-center justify-center text-[#221106] hover:bg-[#221106] hover:text-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <img
            :src="currentImage"
            alt="Product"
            class="w-full h-[420px] object-cover"
          />

          <button
            v-if="images.length > 1"
            @click="next"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#FFFFFF4D] backdrop-blur rounded-lg flex items-center justify-center text-[#221106] hover:bg-[#221106] hover:text-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>

    <!-- Thumbnail -->
    <div class="flex items-center justify-center gap-4" v-if="images.length > 1">
      <div
        v-for="(img, index) in images"
        :key="index"
        @click="activeIndex = index"
        class="w-24 h-16 md:w-28 md:h-20 overflow-hidden rounded-xl cursor-pointer border transition-all duration-300"
        :class="
          activeIndex === index
            ? 'border-[#937864] scale-105'
            : 'border-transparent opacity-60 hover:opacity-100'
        "
      >
        <img
          :src="img"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

const activeIndex = ref(0);

const currentImage = computed(() => {
  return props.images && props.images.length ? props.images[activeIndex.value] : '';
});

const prev = () => {
  if (!props.images || !props.images.length) return;
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
};

const next = () => {
  if (!props.images || !props.images.length) return;
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>