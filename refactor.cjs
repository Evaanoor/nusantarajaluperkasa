const fs = require('fs');
const path = require('path');

const galleryFiles = [
  { file: 'VasePot.vue', id: 1, desc: 'Koleksi vas dan pot keramik premium dengan sentuhan seni Nusantara.' },
  { file: 'Sculpture.vue', id: 5, desc: 'Koleksi patung pahatan tangan yang merepresentasikan keindahan bentuk dan proporsi.' },
  { file: 'Painting.vue', id: 6, desc: 'Lukisan ekspresif dengan sentuhan warna dan gaya modern.' },
  { file: 'Others.vue', id: 7, desc: 'Koleksi karya seni unik lainnya yang memperkaya estetika ruangan Anda.' },
  { file: 'Mirror.vue', id: 4, desc: 'Kaca hias elegan dengan bingkai artistik untuk menyempurnakan ruang Anda.' },
  { file: 'Lamp.vue', id: 2, desc: 'Lampu hias fungsional sekaligus elemen estetik penyeimbang ruangan.' },
  { file: 'Candle.vue', id: 3, desc: 'Tempat lilin dengan desain memukau untuk atmosfer hangat nan mewah.' }
];

const basePath = path.join(__dirname, 'src/pages/gallery');

galleryFiles.forEach(({ file, id, desc }) => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace import
  content = content.replace(
    /import galleriesJson from '\.\.\/\.\.\/\.\.\/draft\/api-contract\/galleries\.json'/,
    "import { fetchGalleries } from '../../../services/api'"
  );

  // Match the onMounted block
  const onMountedRegex = /onMounted\(\(\) => \{[\s\S]*?\}\)/;
  
  const replacement = `const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchGalleries();
    const data = response.data || response;
    const targetCategory = data.categories.find(cat => cat.id === ${id});
    
    if (targetCategory) {
      categoryData.value = {
        name: targetCategory.name,
        description: "${desc}",
        items: targetCategory.items || []
      };
    }
  } catch (err) {
    console.error('Error fetching gallery:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
})`;

  content = content.replace(onMountedRegex, replacement);
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
