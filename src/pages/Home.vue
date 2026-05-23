<template>
  <div>
    <HeroBanner />
    <SectionAbout />
    <SectionVision />
    <SectionMap />
    <SectionCTA bgColor="bg-[#221106]" />

    </div>
</template>

<script setup>
import HeroBanner from '../components/section/home/HeroBanner.vue'
import SectionAbout from '../components/section/home/SectionAbout.vue'
import SectionVision from '../components/section/home/SectionVision.vue'
import SectionMap from '../components/section/home/SectionMap.vue'
import SectionCTA from '../components/shared/SectionCTA.vue'
</script>