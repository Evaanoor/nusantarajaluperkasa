<template>
  <section class="relative w-full z-40" :class="bgColor">


    <div class="w-full pt-16 md:pt-24"></div>

    <div class="relative w-full h-[600px] md:h-[700px]">

      <img
        src="../../../../draft/mocks/images/workshop.png"
        alt="Workshop"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/10"></div>

      <div
        class="max-w-[1500px] mx-auto px-8 md:px-12 lg:px-24 h-full relative flex items-start justify-end pt-12 md:pt-32"
      >

        <div
          class="bg-white text-black px-8 py-8 md:px-[42px] md:py-[40px] w-full md:max-w-[580px] min-h-[680px] rounded-[8px] shadow-xl relative z-20 -mt-[120px] md:-mt-[210px] md:translate-x-12 flex flex-col"
        >


          <template v-if="!isSubmitted">
            <h2
              class="font-unbounded font-bold text-[#110802] text-[22px] md:text-[24px] leading-[1.15] tracking-[-0.03em] uppercase mb-1"
            >
              GET IN TOUCH <br />
              WITH US
            </h2>

            <p
              class="text-[10px] md:text-[11px] text-[#110802] mb-8 leading-[1.6] max-w-[95%]"
            >
              We're here to answer your questions and support your needs —
              just send us a message and we'll get back to you shortly.
            </p>

            <form
              @submit.prevent="handleSubmit"
              class="flex flex-col flex-grow"
            >

              <div class="flex flex-col gap-[60px]">


                <div class="relative">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    class="w-full bg-transparent border-b border-black pb-2 text-[14px] text-gray-800 placeholder:text-gray-500 focus:border-black outline-none transition-colors font-medium"
                  />
                </div>

                <!-- email -->
                <div class="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    class="w-full bg-transparent border-b border-black pb-2 text-[14px] text-gray-800 placeholder:text-gray-500 focus:border-black outline-none transition-colors font-medium"
                  />
                </div>

                <!-- subject -->
                <div class="relative">
                  <input
                    type="text"
                    required
                    placeholder="Your Subject"
                    class="w-full bg-transparent border-b border-black pb-2 text-[14px] text-gray-800 placeholder:text-gray-500 focus:border-black outline-none transition-colors font-medium"
                  />
                </div>

                <!-- message -->
                <div class="relative mt-4">
                  <textarea
                    required
                    placeholder="Your Message"
                    rows="3"
                    class="w-full bg-transparent border-b border-black pb-2 text-[14px] text-gray-800 placeholder:text-gray-500 focus:border-black outline-none transition-colors font-medium resize-none"
                  ></textarea>
                </div>

              </div>

              <!-- button -->
              <button
                type="submit"
                class="mt-auto w-fit bg-[#110802] text-[#DAB49A] text-[10px] font-medium px-6 py-2 rounded-[5px] hover:!bg-[#DAB49A] hover:!text-[#221106] transition-all duration-300"
              >
                Send Message
              </button>

            </form>
          </template>

          <!-- Success State -->
          <template v-else>
            <div class="flex flex-col flex-grow items-center justify-center text-center px-4">
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  bgColor: {
    type: String,
    default: 'bg-transparent'
  }
})

const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
}
</script>

<style scoped>
.font-unbounded {
  font-family: 'Unbounded', sans-serif;
}
</style>