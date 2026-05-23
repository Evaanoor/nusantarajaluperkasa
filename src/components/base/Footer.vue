<template>
  <footer class="w-full bg-black text-[#A39D9D]">
    <div class="max-w-[1280px] mx-auto px-4 lg:px-[48px]">
      
      <!-- Logo section -->
      <div class="flex items-center gap-3 pt-10 pb-16">
        <div class="w-[42px] h-[42px] rounded-full overflow-hidden flex-shrink-0 bg-[#564233] flex items-center justify-center">
          <img 
            src="/images/logo-real.png" 
            alt="NJP Logo" 
            class="w-full h-full object-contain" 
            id="footer-logo-image"
          />
        </div>
        
        <div class="flex flex-col items-start justify-center gap-[5px] font-['Kanit',sans-serif]">
          <span class="font-normal text-[8px] uppercase leading-none tracking-[1.02em] -mr-[1.02em] bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(0deg,#D7BBA1,#D7BBA1)] bg-clip-text text-transparent whitespace-nowrap">
            NUSANTARA
          </span>
          <span class="font-extrabold text-[11px] uppercase leading-none tracking-[0.28em] -mr-[0.28em] bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(0deg,#D7BBA1,#D7BBA1)] bg-clip-text text-transparent whitespace-nowrap">
            JALU PERKASA
          </span>
        </div>
      </div>

      <!-- Main content grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 pb-20">
        
        <!-- Collection -->
        <div>
          <h3 class="text-white font-bold mb-2 text-[16px]">Collection</h3>
          <ul class="flex flex-col gap-[6px] text-[16px]">
            <li><router-link to="/gallery/vase-pot" class="hover:text-white transition-colors">Vase & Pot</router-link></li>
            <li><router-link to="/gallery/lamp" class="hover:text-white transition-colors">Lamp</router-link></li>
            <li><router-link to="/gallery/candle" class="hover:text-white transition-colors">Candle</router-link></li>
            <li><router-link to="/gallery/mirror" class="hover:text-white transition-colors">Mirror</router-link></li>
            <li><router-link to="/gallery/sculpture" class="hover:text-white transition-colors">Sculpture</router-link></li>
            <li><router-link to="/gallery/painting" class="hover:text-white transition-colors">Painting</router-link></li>
          </ul>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-white font-bold mb-2 text-[16px]">Navigation</h3>
          <ul class="flex flex-col gap-[6px] text-[16px]">
            <li><router-link to="/" class="hover:text-white transition-colors">Home</router-link></li>
            <li><router-link to="/gallery" class="hover:text-white transition-colors">Gallery</router-link></li>
            <li><router-link to="/news" class="hover:text-white transition-colors">News</router-link></li>
            <li><router-link to="/about" class="hover:text-white transition-colors">About Us</router-link></li>
            <li><router-link to="/contact" class="hover:text-white transition-colors">Contact Us</router-link></li>
          </ul>
        </div>

        <!-- Find Us -->
        <div>
          <h3 class="text-white font-bold mb-2 text-[16px]">Find Us</h3>
          <div class="flex flex-col gap-1 text-[16px] leading-relaxed">
            <p>
              Dusun Semail, Rt.06, Bangunharjo,<br />
              Sewon, Bantul, Yogyakarta, 55187,<br />
              INDONESIA.
            </p>
            <p><a href="tel:+6281912962040" class="hover:text-white transition-colors">+62 819-1296-2040</a></p>
            <p><a href="mailto:nusantarajalu.office@gmail.com" class="hover:text-white transition-colors">nusantarajalu.office@gmail.com</a></p>
          </div>
        </div>

        <!-- Work Hours & Follow Us -->
        <div>
          <h3 class="text-white font-bold mb-2 text-[16px]">Work Hours</h3>
          <p class="mb-5 text-[16px]">Mon - Sun 08:00 AM - 16:00 PM</p>
          
          <h3 class="text-white font-bold mb-2 text-[16px]">Follow Us</h3>
          <div class="flex gap-3">
            <a href="#" class="hover:text-white transition-colors" aria-label="Instagram">
              <svg class="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="hover:text-white transition-colors" aria-label="Facebook">
              <svg class="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="hover:text-white transition-colors" aria-label="X">
              <svg class="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>
        
      </div>

    </div>

      <!-- Copyright -->
      <div class="pt-6 pb-8 border-t border-[#A39D9D] text-center">
        <p class="text-[10px] text-[#A39D9D] font-normal tracking-wide">
          Copyright &copy; 2026 - Develop by NJP
        </p>
      </div>

  </footer>
</template>