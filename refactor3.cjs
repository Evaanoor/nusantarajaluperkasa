const fs = require('fs');
const path = require('path');

const homeFiles = [
  { file: 'SectionVision.vue', prop: 'products', assign: 'data.our_products.slice(0, 3)' },
  { file: 'SectionMap.vue', prop: 'mapData', assign: 'data.world_map' },
  { file: 'SectionAbout.vue', prop: 'aboutData', assign: 'data.about_us' }
];

const basePath = path.join(__dirname, 'src/components/section/home');

homeFiles.forEach(({ file, prop, assign }) => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace import
  content = content.replace(
    /import homeContent from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/home_content\.json'/,
    "import { fetchHomeContent } from '../../../../services/api';\nimport { ref, onMounted } from 'vue';"
  );

  // Replace const assignment
  const constRegex = new RegExp(`const ${prop} = homeContent\\.data\\..+`);
  
  const replacement = `const ${prop} = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetchHomeContent();
    const data = response.data || response;
    ${prop}.value = ${assign};
  } catch (err) {
    console.error('Error fetching home content:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});`;

  content = content.replace(constRegex, replacement);
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
