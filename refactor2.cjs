const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/pages/gallery/ProductDetail.vue');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /import mockData from '\.\.\/\.\.\/\.\.\/draft\/api-contract\/products\.json';\s+import galleriesJson from '\.\.\/\.\.\/\.\.\/draft\/api-contract\/galleries\.json';/,
  "import { fetchProductDetail } from '../../../services/api';"
);

const loadProductRegex = /const loadProduct = \(slug\) => \{[\s\S]*?catch \(error\) \{[\s\S]*?\}\n\};/;

const replacement = `const error = ref(null);

const loadProduct = async (slug) => {
  productData.value = null; // reset for loading state
  error.value = null;
  try {
    const response = await fetchProductDetail(slug);
    const data = response.data || response;
    
    if (data) {
      let baseProduct = { ...data };
      if (!baseProduct.images) baseProduct.images = [];
      if (baseProduct.primary_image_url && !baseProduct.images.includes(baseProduct.primary_image_url)) {
        baseProduct.images.push(baseProduct.primary_image_url);
      }
      if (baseProduct.hover_image_url && !baseProduct.images.includes(baseProduct.hover_image_url)) {
        baseProduct.images.push(baseProduct.hover_image_url);
      }
      
      if (baseProduct.images.length === 1) {
        baseProduct.images.push('/draft/mocks/images/lamp-angle.jpeg');
      } else if (baseProduct.images.length === 0) {
        baseProduct.images = [
          '/draft/mocks/images/lamp.jpeg',
          '/draft/mocks/images/lamp-angle.jpeg'
        ];
      }
      
      productData.value = baseProduct;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } catch (err) {
    console.error("Gagal mengambil data produk dari API:", err);
    error.value = "Gagal mengambil data produk";
  }
};`;

content = content.replace(loadProductRegex, replacement);
fs.writeFileSync(file, content);
console.log('Updated ProductDetail.vue');

const relatedFile = path.join(__dirname, 'src/components/section/product/RelatedProducts.vue');
let relatedContent = fs.readFileSync(relatedFile, 'utf8');
relatedContent = relatedContent.replace(
  /import galleriesJson from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/galleries\.json'/,
  "import { fetchGalleries } from '../../../../services/api'"
);

const watchRegex = /\/\/ Kumpulkan semua produk dari katalog[\s\S]*\}\)/;

const newWatch = `const error = ref(null);
const loading = ref(false);

watch(() => props.productDetail, async (newDetail) => {
  if (!newDetail) return;
  
  loading.value = true;
  error.value = null;
  try {
    const response = await fetchGalleries();
    const data = response.data || response;
    
    const allProducts = [];
    if (data && data.categories) {
      data.categories.forEach(cat => {
        if (cat.items) {
          cat.items.forEach(item => {
            if (!allProducts.some(p => p.slug === item.slug)) {
              allProducts.push({
                id: item.id,
                name: item.name,
                slug: item.slug,
                thumbnail_url: item.primary_image_url || '/draft/mocks/images/lamp.jpeg'
              });
            }
          });
        }
      });
    }
    
    let available = allProducts.filter(p => p.slug !== newDetail.slug);
    available = available.sort(() => Math.random() - 0.5);
    displayProducts.value = available.slice(0, 4);
  } catch (err) {
    console.error("Gagal memuat related products:", err);
    error.value = "Gagal memuat produk terkait";
  } finally {
    loading.value = false;
  }
}, { immediate: true })`;

relatedContent = relatedContent.replace(watchRegex, newWatch);
fs.writeFileSync(relatedFile, relatedContent);
console.log('Updated RelatedProducts.vue');
