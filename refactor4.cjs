const fs = require('fs');
const path = require('path');

const files = [
  {
    file: 'src/components/section/news/HeroNews.vue',
    importRegex: /import bannersJson from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/banners\.json';?/,
    fetchFunc: 'fetchHeroBanners',
    stateVar: 'heroData',
    replaceMatch: /const heroData = bannersJson\.data\.news \|\| \{[\s\S]*?\};/,
    assignValue: 'res.news || {};'
  },
  {
    file: 'src/components/section/contact/HeroContact.vue',
    importRegex: /import bannersJson from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/banners\.json';?/,
    fetchFunc: 'fetchHeroBanners',
    stateVar: 'data',
    replaceMatch: /const data = \{[\s\S]*?\};/,
    assignValue: '{ title: res.contact.title, subtitle: res.contact.subtitle, backgroundImage: res.contact.background_image };'
  },
  {
    file: 'src/components/section/gallery/HeroGallery.vue',
    importRegex: /import bannersJson from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/banners\.json';?/,
    fetchFunc: 'fetchHeroBanners',
    stateVar: 'data',
    replaceMatch: /const data = \{[\s\S]*?\};/,
    assignValue: '{ title: res.gallery.title, description: res.gallery.description, banner: res.gallery.background_image };'
  },
  {
    file: 'src/components/section/about/HeroAbout.vue',
    importRegex: /import bannersJson from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/banners\.json';?/,
    fetchFunc: 'fetchHeroBanners',
    stateVar: 'data',
    replaceMatch: /const data = \{[\s\S]*?\};/,
    assignValue: '{ title: res.about.title, backgroundImage: res.about.background_image };'
  },
  {
    file: 'src/components/section/contact/FormContact.vue',
    importRegex: /import contactData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/contact\.json';?/,
    fetchFunc: 'fetchContact',
    stateVar: 'data',
    replaceMatch: /const data = contactData\.form_section;/,
    assignValue: 'res.form_section;'
  },
  {
    file: 'src/components/section/contact/AddressContact.vue',
    importRegex: /import contactData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/contact\.json';?/,
    fetchFunc: 'fetchContact',
    stateVar: 'data',
    replaceMatch: /const data = contactData\.address_section;/,
    assignValue: 'res.address_section;'
  },
  {
    file: 'src/components/section/about/VisionMissionAbout.vue',
    importRegex: /import aboutData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/about\.json';?/,
    fetchFunc: 'fetchAbout',
    stateVar: 'data',
    replaceMatch: /const data = aboutData\.visionMission;?/,
    assignValue: 'res.visionMission;'
  },
  {
    file: 'src/components/section/about/ValueAbout.vue',
    importRegex: /import aboutData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/about\.json';?/,
    fetchFunc: 'fetchAbout',
    stateVar: 'valueData',
    replaceMatch: /const valueData = aboutData\.value;?/,
    assignValue: 'res.value;'
  },
  {
    file: 'src/components/section/about/Philosophy.vue',
    importRegex: /import aboutData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/about\.json';?/,
    fetchFunc: 'fetchAbout',
    stateVar: 'philosophyData',
    replaceMatch: /const philosophyData = aboutData\.philosophy;?/,
    assignValue: 'res.philosophy;'
  },
  {
    file: 'src/components/section/about/JourneyAbout.vue',
    importRegex: /import aboutData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/about\.json';?/,
    fetchFunc: 'fetchAbout',
    stateVar: 'journeyData',
    replaceMatch: /const journeyData = aboutData\.companyJourney;?/,
    assignValue: 'res.companyJourney;'
  },
  {
    file: 'src/components/section/about/HistoryAbout.vue',
    importRegex: /import aboutData from '\.\.\/\.\.\/\.\.\/\.\.\/draft\/api-contract\/about\.json';?/,
    fetchFunc: 'fetchAbout',
    stateVar: 'storyData',
    replaceMatch: /const storyData = aboutData\.history;?/,
    assignValue: 'res.history;'
  }
];

files.forEach(({ file, importRegex, fetchFunc, stateVar, replaceMatch, assignValue }) => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already refactored
  if (content.includes(`import { ${fetchFunc} }`)) {
    console.log(`Already refactored: ${file}`);
    return;
  }

  // Handle template wrapper <section ...> to <section v-if="${stateVar}" ...>
  // This is a simple heuristic to prevent rendering null data
  // Only apply to first top-level element if it doesn't already have v-if
  if (!content.includes(`v-if="${stateVar}"`)) {
     content = content.replace(/(<template>\s*<[a-zA-Z]+)(?!.*?v-if=)/, `$1 v-if="${stateVar}"`);
  }

  // Replace import
  content = content.replace(
    importRegex,
    `import { ${fetchFunc} } from '../../../../services/api';\nimport { ref, onMounted } from 'vue';`
  );

  const newCode = `const ${stateVar} = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await ${fetchFunc}();
    const res = response.data || response;
    ${stateVar}.value = ${assignValue}
  } catch (err) {
    console.error('Error fetching API:', err);
    error.value = err.message || 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});`;

  content = content.replace(replaceMatch, newCode);
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
