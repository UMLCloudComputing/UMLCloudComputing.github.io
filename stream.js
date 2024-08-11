const { execSync } = require('child_process');
const { readFileSync, mkdirSync, existsSync, writeFileSync } = require('fs');
const { join } = require('path');

const repos = JSON.parse(readFileSync('repos.json', 'utf8'));
position = 1;

for (const [name, url] of Object.entries(repos)) {
  const repoDir = join(__dirname, 'temp', name);
  const destDir = join(__dirname, 'docs', 'projects', name);

  // Clone the repository
  execSync(`git clone ${url} ${repoDir}`);

  // Create destination directory if it doesn't exist
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }

  // Copy the docs/web_docs directory to the destination
  execSync(`cp -r ${join(repoDir, 'docs', 'web_docs')}/* ${destDir}`);

  // Create _category_.json file
  const categoryContent = {
    label: name,
    position: position,
    link: {
      type: "generated-index"
    }
  };
  writeFileSync(join(destDir, '_category_.json'), JSON.stringify(categoryContent, null, 2));

  console.log(`Copied docs from ${name}`);
  position++;
}