const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/section');

const fixes = [
  {
    file: 'about/HeroAbout.vue',
    search: /heroData\.value = {\s*title: res\.about\.title,\s*backgroundImage: res\.about\.background_image\s*}/,
    replace: "heroData.value = { title: res?.about?.title || 'About Us', backgroundImage: res?.about?.background_image || '' }"
  },
  {
    file: 'contact/HeroContact.vue',
    search: /data\.value = { title: res\.contact\.title, subtitle: res\.contact\.subtitle, backgroundImage: res\.contact\.background_image };/,
    replace: "data.value = { title: res?.contact?.title || 'Contact Us', subtitle: res?.contact?.subtitle || '', backgroundImage: res?.contact?.background_image || '' };"
  },
  {
    file: 'gallery/HeroGallery.vue',
    search: /header\.value = {\s*title: res\.gallery\.title,\s*description: res\.gallery\.description,\s*banner: res\.gallery\.background_image\s*};/,
    replace: "header.value = { title: res?.gallery?.title || 'Gallery', description: res?.gallery?.description || '', banner: res?.gallery?.background_image || '' };"
  },
  {
    file: 'news/HeroNews.vue',
    search: /heroData\.value = res\.news \|\| {};/,
    replace: "heroData.value = res?.news || { title: 'News', background_image: '' };"
  }
];

fixes.forEach(({file, search, replace}) => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(search, replace);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});
