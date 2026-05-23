<template>
  <section class="w-full">
    <!-- Main Container -->
    <div class="border border-[#D9C8B8] rounded-[24px] overflow-hidden text-[#221106] font-['Plus_Jakarta_Sans',sans-serif]">

      <div class="grid grid-cols-1 md:grid-cols-2">

        <div class="p-6 md:p-8 lg:p-12 md:border-r border-[#D9C8B8]">
          <h1 class="font-unbounded uppercase text-[24px] md:text-[28px] lg:text-[32px] tracking-wider font-light mb-2">
            {{ product?.name || 'TITLE PRODUCT' }}
          </h1>

          <p class="text-[13px] md:text-[14px] leading-relaxed opacity-80 mb-4">
            {{ product?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }}
          </p>

          <ul class="list-disc pl-5 space-y-2 text-[13px] md:text-[14px] opacity-80">
            <li v-for="(feat, i) in product?.features || ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']" :key="i">
              {{ feat }}
            </li>
          </ul>
        </div>

        <div class="p-6 md:p-8 lg:p-12 flex flex-col justify-between">
          
          <div>
            <div class="text-[12px] md:text-[13px] uppercase tracking-wide mb-2 font-medium">
              <span>CATEGORY : </span>
              <span class="opacity-60">{{ product?.category || 'LOREM IPSUM' }}</span>
            </div>

            <hr class="border-[#D9C8B8] mb-4">

            <ul class="space-y-4 text-[13px] md:text-[14px]">
              <li v-if="product?.specifications?.material" class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full bg-[#221106] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-[#ECD9CB]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span class="opacity-90">{{ product.specifications.material }}</span>
              </li>

              <li v-if="product?.specifications?.dimensions" class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full bg-[#221106] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-[#ECD9CB]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span class="opacity-90">{{ product.specifications.dimensions }}</span>
              </li>

              <li v-if="product?.specifications?.weight" class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full bg-[#221106] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 text-[#ECD9CB]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span class="opacity-90">{{ product.specifications.weight }}</span>
              </li>
            </ul>
          </div>

          <div>
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="$router.push('/gallery')"
                class="flex-1 bg-[#221106] text-[#E5D5C6] py-3 rounded-lg text-sm font-medium hover:bg-[#DAB49A] hover:text-[#221106] transition-colors duration-300"
              >
                Browse Collection
              </button>
              <a 
                href="mailto:nusantarajaluperkasa@gmail.com?subject=Inquiry about product"
                class="flex-1 bg-[#221106] text-[#E5D5C6] py-3 rounded-lg text-sm font-medium hover:bg-[#DAB49A] hover:text-[#221106] transition-colors duration-300 flex items-center justify-center"
              >
                Send an Email
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  }
})
</script>

