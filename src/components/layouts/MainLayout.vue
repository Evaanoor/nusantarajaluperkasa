<template>
  <div class="min-h-screen bg-[#1a1a1a] flex flex-col overflow-x-hidden">
    
    <Navbar />

    <main class="flex-grow">
      <slot />
    </main>

    <Footer />

  </div>
</template>

<script setup>
import Navbar from '../Base/Navbar.vue';
import Footer from '../Base/Footer.vue';
</script>