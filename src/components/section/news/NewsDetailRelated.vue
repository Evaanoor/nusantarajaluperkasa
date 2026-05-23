<template>
  <section class="mt-32 border-t border-[#D9C8B8] pt-16 max-w-6xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold text-[#221106] mb-8">Other Articles</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <router-link
          v-for="article in articles" :key="article.id"
          :to="`/news/${article.id}`"
          class="block"
      >
          <div class="bg-white rounded-[10px] overflow-hidden shadow-sm w-full aspect-[4/3] lg:aspect-[1.41/1] mb-4">
            <img :src="article.thumbnail" class="w-full h-full object-cover" />
          </div>

          <p class="text-[11px] tracking-widest text-[#937864] mb-1 font-semibold uppercase">{{ article.date }}</p>
          <h3 class="text-sm font-bold text-[#221106]">{{ article.title }}</h3>
      </router-link>
    </div>
  </section>
</template>

<script setup>
defineProps(['articles']);
</script>