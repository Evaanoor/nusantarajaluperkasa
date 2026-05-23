<template>
  <section class="bg-[#ECD9CB] py-20 md:py-28 px-8 md:px-16 lg:px-24 text-[#221106]">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
      
      <!-- Left Column -->
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-3">
          <h3 class="text-[14px] md:text-[16px] font-bold uppercase tracking-wide">{{ data.address_title }}</h3>
          <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] md:text-[15px] leading-relaxed opacity-80 whitespace-pre-line">
            {{ data.address }}
          </p>
        </div>
        
        <div class="flex flex-col gap-3">
          <h3 class="text-[14px] md:text-[16px] font-bold uppercase tracking-wide">{{ data.hours_title }}</h3>
          <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] md:text-[15px] leading-relaxed opacity-80">
            {{ data.hours }}
          </p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-3">
          <h3 class="text-[14px] md:text-[16px] font-bold uppercase tracking-wide">{{ data.question_title }}</h3>
          <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] md:text-[15px] leading-relaxed opacity-80">
            {{ data.email }}
          </p>
        </div>
        
        <div class="flex flex-col gap-3">
          <h3 class="text-[14px] md:text-[16px] font-bold uppercase tracking-wide">{{ data.call_title }}</h3>
          <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] md:text-[15px] leading-relaxed opacity-80">
            {{ data.phone }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { fetchContact } from '../../../services/api';
import { ref, onMounted } from 'vue';
const data = ref({});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchContact();
    const res = response.data || response;
    data.value = res.address_section;
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>