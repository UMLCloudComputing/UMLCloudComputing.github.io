const { execSync } = require('child_process');
const { readFileSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');

const repos = JSON.parse(readFileSync('repos.json', 'utf8'));

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

  console.log(`Copied docs from ${name}`);
}