const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.vue')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Remove v-if from root element right after <template>
      // Matches `<template>\n  <section v-if="data"` or similar
      const vIfRegex = /(<template>\s*<[a-zA-Z0-9_-]+)\s+v-if="[a-zA-Z0-9_]+"/g;
      if (vIfRegex.test(content)) {
        content = content.replace(vIfRegex, '$1');
        changed = true;
      }

      // We also need to change `ref(null)` to `ref({})` for the state variables 
      // so the template doesn't throw when accessing properties like data.title
      // The variables we used were: data, heroData, header, valueData, philosophyData, journeyData, storyData, products, mapData, aboutData
      const vars = ['data', 'heroData', 'header', 'valueData', 'philosophyData', 'journeyData', 'storyData', 'mapData', 'aboutData'];
      
      for (const v of vars) {
        const refNullRegex = new RegExp(`const ${v} = ref\\(null\\);`, 'g');
        if (refNullRegex.test(content)) {
          content = content.replace(refNullRegex, `const ${v} = ref({});`);
          changed = true;
        }
      }

      // For array variables
      if (/const products = ref\(null\);/.test(content)) {
         content = content.replace(/const products = ref\(null\);/g, 'const products = ref([]);');
         changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed Vue root v-if issue in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/components/section'));
