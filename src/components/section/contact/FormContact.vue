<template>
  <section class="relative w-full">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="data.bg_image"
        alt="Background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Container for positioning the form card -->
    <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex justify-end">
      
      <!-- The Form Card -->
      <div class="w-full max-w-md bg-white rounded-lg p-10 md:p-12 shadow-2xl -mt-10 mb-16 md:-mt-16 lg:-mt-20 md:mb-20">
        
        <template v-if="!isSubmitted">
          <h2 class="font-unbounded text-[#221106] text-[24px] md:text-[32px] font-bold uppercase leading-[1.2] mb-4 whitespace-pre-line">
            {{ data.title }}
          </h2>
          
          <p class="font-['Plus_Jakarta_Sans',sans-serif] text-[#221106] text-[12px] md:text-[13px] font-light leading-relaxed mb-8 opacity-80 text-justify">
            {{ data.subtitle }}
          </p>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-8">
            
            <div class="relative">
              <input 
                type="text" 
                required
                placeholder="Name" 
                class="w-full border-b border-gray-300 py-2 text-[13px] text-[#221106] bg-transparent focus:outline-none focus:border-[#221106] transition-colors"
              />
            </div>

            <div class="relative">
              <input 
                type="email" 
                required
                placeholder="Email address" 
                class="w-full border-b border-gray-300 py-2 text-[13px] text-[#221106] bg-transparent focus:outline-none focus:border-[#221106] transition-colors"
              />
            </div>

            <div class="relative">
              <input 
                type="text" 
                required
                placeholder="Subject" 
                class="w-full border-b border-gray-300 py-2 text-[13px] text-[#221106] bg-transparent focus:outline-none focus:border-[#221106] transition-colors"
              />
            </div>

            <div class="relative">
              <input 
                type="text" 
                required
                placeholder="Message" 
                class="w-full border-b border-gray-300 py-2 text-[13px] text-[#221106] bg-transparent focus:outline-none focus:border-[#221106] transition-colors"
              />
            </div>

            <div class="pt-4">
              <button 
                type="submit"
                class="bg-black text-[#ECD9CB] px-6 py-3 rounded-md text-[12px] font-medium hover:!bg-[#DAB49A] hover:!text-[#221106] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>

          </form>
        </template>

        <!-- Success State -->
        <template v-else>
          <div class="flex flex-col flex-grow items-center justify-center text-center px-4 py-8">
            <h2 class="font-unbounded font-black text-[#110802] text-[28px] md:text-[36px] uppercase mb-4 tracking-tight">
              THANK YOU!
            </h2>
            <p class="text-[12px] md:text-[13px] text-[#110802] font-medium leading-[1.6] max-w-[400px] mb-8">
              Thank you for reaching out to us. We have successfully received your message, and a member of our team will review it and get back to you within 24 to 48 hours.
            </p>
            <button
              @click="isSubmitted = false"
              class="bg-[#110802] text-[#DAB49A] text-[12px] font-medium px-8 py-3 rounded-[8px] hover:!bg-[#DAB49A] hover:!text-[#221106] transition-all duration-300"
            >
              Back to Form
            </button>
          </div>
        </template>

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
const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
};

onMounted(async () => {
  try {
    const response = await fetchContact();
    const res = response.data || response;
    data.value = res.form_section;
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>
