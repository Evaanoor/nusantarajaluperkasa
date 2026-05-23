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
import Navbar from '../base/Navbar.vue';
import Footer from '../base/Footer.vue';
</script>