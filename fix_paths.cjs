const fs = require('fs');
const path = require('path');

function replaceInDir(dir, find, replace) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath, find, replace);
    } else if (fullPath.endsWith('.vue')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(find)) {
        content = content.replace(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed ${fullPath}`);
      }
    }
  }
}

// In src/pages/gallery, it should be ../../services/api
replaceInDir(path.join(__dirname, 'src/pages'), '../../../services/api', '../../services/api');

// In src/components/section/*, it should be ../../../services/api
// Some scripts put ../../../../services/api
replaceInDir(path.join(__dirname, 'src/components/section'), '../../../../services/api', '../../../services/api');
