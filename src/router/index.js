import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Gallery from '../pages/Gallery.vue'

import VasePot from '../pages/gallery/VasePot.vue'
import Lamp from '../pages/gallery/Lamp.vue'
import Candle from '../pages/gallery/Candle.vue'
import Mirror from '../pages/gallery/Mirror.vue'
import Sculpture from '../pages/gallery/Sculpture.vue'
import Painting from '../pages/gallery/Painting.vue'
import Others from '../pages/gallery/Others.vue'

import News from '../pages/News.vue'
import AboutUs from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import ProductDetail from '../pages/gallery/ProductDetail.vue'
import NewsDetail from '../pages/NewsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/gallery/vase-pot',
    name: 'VasePot',
    component: VasePot
  },
  {
    path: '/gallery/lamp',
    name: 'Lamp',
    component: Lamp
  },
  {
    path: '/gallery/candle',
    name: 'Candle',
    component: Candle
  },
  {
    path: '/gallery/mirror',
    name: 'Mirror',
    component: Mirror
  },
  {
    path: '/gallery/sculpture',
    name: 'Sculpture',
    component: Sculpture
  },
  {
    path: '/gallery/painting',
    name: 'Painting',
    component: Painting
  },
  {
    path: '/gallery/others',
    name: 'Others',
    component: Others
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/product/:slug', 
    name: 'ProductDetail',
    component: ProductDetail,
    props: true,
    meta: { 
      useDarkNavbar: true 
    }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    props: true,
    meta: { 
      useDarkNavbar: true 
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' } // hapus behavior: 'smooth' jika ingin instan tanpa animasi geser
    }
  }
})

export default router