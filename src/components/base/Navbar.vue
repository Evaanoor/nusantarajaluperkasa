<template>
  <nav 
  :class="[
    'w-full z-50 transition-all duration-300 fixed top-0 left-0',
    
    isDark 
      ? 'bg-[#221106]' 
      : 'bg-black/60 backdrop-blur-md'
  ]"
>
  <div 
    :class="[
      'max-w-[1440px] mx-auto flex items-center justify-between',
      'px-4 lg:px-[48px]',
      isScrolled && !isDark
        ? 'py-1'
        : 'py-1.5'
    ]"
  >
    
    <div class="flex items-center gap-4">

  <!-- logo -->
  <div class="w-[46px] h-[46px] rounded-full overflow-hidden flex-shrink-0 bg-[#1F0F04] flex items-center justify-center">
    <img 
      src="/images/logo-real.png" 
      alt="NJP Logo" 
      class="w-[74%] h-[74%] object-contain"
      id="logo-image"
    />
  </div>

  <!-- text -->
  <div class="flex flex-col leading-none gap-[6px] font-['Kanit',sans-serif]">
    
    <span class="text-[10px] tracking-[1.02em] uppercase text-[#B89B82] font-normal">
      Nusantara
    </span>

    <span class="text-[13px] tracking-[0.28em] uppercase text-[#B89B82] font-extrabold">
      Jalu Perkasa
    </span>

  </div>

</div>
    
    <ul class="hidden lg:flex items-center gap-10 text-[9px] tracking-[0.12em] uppercase text-white">
      <li>
        <router-link to="/" class="hover:text-[#A39D9D] transition-colors duration-200">
          HOME
        </router-link>
      </li>

      <li class="relative group">
        <div class="flex items-center gap-1 cursor-pointer hover:text-[#A39D9D] transition-colors duration-200">
          <router-link to="/gallery">
            GALLERY
          </router-link>
          
          <ChevronRightIcon class="w-3 h-3 transition-transform duration-300 group-hover:rotate-90" />
        </div>

        <div class="absolute left-0 top-full pt-4 w-[98px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
  
          <div class="bg-black/60 backdrop-blur-md border border-white/10 rounded-b-[8px] overflow-hidden flex flex-col shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]">
            
            <router-link to="/gallery/vase-pot" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200 border-b border-white/5 last:border-none">
              Vase & Pot
            </router-link>

            <router-link to="/gallery/lamp" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200 border-b border-white/5 last:border-none">
              Lamp
            </router-link>

            <router-link to="/gallery/candle" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200 border-b border-white/5 last:border-none">
              Candle
            </router-link>

            <router-link to="/gallery/mirror" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200 border-b border-white/5 last:border-none">
              Mirror
            </router-link>

            <router-link to="/gallery/sculpture" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200 border-b border-white/5 last:border-none">
              Sculpture
            </router-link>

            <router-link to="/gallery/painting" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200 border-b border-white/5 last:border-none">
              Painting
            </router-link>

            <router-link to="/gallery/others" class="flex items-center px-4 h-[32px] text-[9px] text-white hover:text-[#A39D9D] transition-colors duration-200">
              Others
            </router-link>
            
          </div>
        </div>
      </li>

      <li>
        <router-link to="/news" class="hover:text-[#A39D9D] transition-colors duration-200">
          NEWS
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-[#A39D9D] transition-colors duration-200">
          ABOUT US
        </router-link>
      </li>
      <li>
        <router-link to="/contact" class="hover:text-[#A39D9D] transition-colors duration-200">
          CONTACT US
        </router-link>
      </li>
    </ul>
    
    <!-- Mobile Hamburger Button -->
    <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-white p-2">
      <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
      <XMarkIcon v-else class="w-6 h-6" />
    </button>
  </div>
  
  <!-- Mobile Menu Drawer -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-2xl flex flex-col py-6 px-6 gap-6 z-50 max-h-[80vh] overflow-y-auto">
      <router-link @click="isMobileMenuOpen = false" to="/" class="text-[12px] tracking-[0.15em] uppercase text-white hover:text-[#B89B82] transition-colors">
        HOME
      </router-link>
      <div class="flex flex-col gap-3">
        <router-link @click="isMobileMenuOpen = false" to="/gallery" class="text-[12px] tracking-[0.15em] uppercase text-white hover:text-[#B89B82] transition-colors">
          GALLERY
        </router-link>
        <div class="pl-4 flex flex-col gap-3 border-l border-white/20 ml-1 mt-1">
          <router-link @click="isMobileMenuOpen = false" to="/gallery/vase-pot" class="text-[10px] tracking-[0.1em] text-white/70 hover:text-white uppercase">Vase & Pot</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/gallery/lamp" class="text-[10px] tracking-[0.1em] text-white/70 hover:text-white uppercase">Lamp</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/gallery/candle" class="text-[10px] tracking-[0.1em] text-white/70 hover:text-white uppercase">Candle</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/gallery/mirror" class="text-[10px] tracking-[0.1em] text-white/70 hover:text-white uppercase">Mirror</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/gallery/sculpture" class="text-[10px] tracking-[0.1em] text-white/70 hover:text-white uppercase">Sculpture</router-link>
          <router-link @click="isMobileMenuOpen = false" to="/gallery/painting" class="text-[10px] tracking-[0.1em] text-white/70 hover:text-white uppercase">Painting</router-link>
        </div>
      </div>
      <router-link @click="isMobileMenuOpen = false" to="/news" class="text-[12px] tracking-[0.15em] uppercase text-white hover:text-[#B89B82] transition-colors">
        NEWS
      </router-link>
      <router-link @click="isMobileMenuOpen = false" to="/about" class="text-[12px] tracking-[0.15em] uppercase text-white hover:text-[#B89B82] transition-colors">
        ABOUT US
      </router-link>
      <router-link @click="isMobileMenuOpen = false" to="/contact" class="text-[12px] tracking-[0.15em] uppercase text-white hover:text-[#B89B82] transition-colors">
        CONTACT US
      </router-link>
    </div>
  </transition>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

const isDark = computed(() => route.meta.useDarkNavbar)

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

watch(route, () => {
  isMobileMenuOpen.value = false;
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>