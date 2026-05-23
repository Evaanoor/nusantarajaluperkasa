<template>
  <section class="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

    <article class="lg:col-span-8 text-[#000000] text-justify md:text-left flex flex-col gap-8">
      <p v-for="(p, i) in paragraphs1" :key="'p1-'+i" 
         class="font-['Plus_Jakarta_Sans'] font-light text-[16px] md:text-[18px] leading-[1.8] text-[#221106] opacity-80">
        {{ p }}
      </p>

      <blockquote v-if="quote" class="text-xl md:text-2xl font-serif italic text-[#221106] border-l-4 border-[#221106] pl-6 my-6 opacity-90">
        "{{ quote }}"
      </blockquote>

      <p v-for="(p, i) in paragraphs2" :key="'p2-'+i" 
         class="font-['Plus_Jakarta_Sans'] font-light text-[16px] md:text-[18px] leading-[1.8] text-[#221106] opacity-80">
        {{ p }}
      </p>
    </article>

    <aside class="lg:col-span-4 w-full h-max lg:sticky lg:top-32">
      <h3 class="text-[16px] font-bold text-[#221106] mb-4">Others</h3>

      <div class="flex flex-col gap-6 w-full">
        <router-link v-for="a in relatedArticles" :key="a.id" :to="`/news/${a.slug || a.id}`" class="group block w-full">
          <div class="bg-white rounded-[8px] overflow-hidden shadow-sm w-full aspect-[16/9] mb-2">
            <img :src="a.thumbnail || a.image" alt="thumb" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          <p class="text-[9px] md:text-[10px] text-[#221106] opacity-60 mb-1">{{ a.date }}</p>
          <h3 class="text-[12px] md:text-[13px] font-bold text-[#221106] leading-snug group-hover:underline max-w-[90%]">{{ a.title }}</h3>
        </router-link>
      </div>
    </aside>

  </section>
</template>

<script setup>
defineProps({
  paragraphs1: Array,
  paragraphs2: Array,
  quote: String,
  sideImage: String,
  relatedArticles: {
    type: Array,
    default: () => []
  }
});
</script>