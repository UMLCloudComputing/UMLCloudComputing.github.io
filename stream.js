const { execSync } = require('child_process');
const { readFileSync, mkdirSync, existsSync, writeFileSync } = require('fs');
const { join } = require('path');

const project_repos = JSON.parse(readFileSync('remote_repos/project_repos.json', 'utf8'));
const activity_repos = JSON.parse(readFileSync('remote_repos/activity_repos.json', 'utf8'));
const resources_repos = JSON.parse(readFileSync('remote_repos/resources_repos.json', 'utf8'));
position = 2;

for (const [name, url] of Object.entries(activity_repos)) {
  const repoDir = join(__dirname, 'temp_resources', name);
  const destDir = join(__dirname, 'docs', 'resources', name);

  // Clone the repository
  execSync(`git clone ${url} ${repoDir}`);

  // Create destination directory if it doesn't exist
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }

  // Copy the docs/web_docs directory to the destination
  execSync(`cp -r ${join(repoDir, 'docs', name)}/* ${destDir}`);

  // Create _category_.json file
  const categoryContent = {
    label: name,
    position: position,
    link: {
      type: "generated-index"
    }
  };
  writeFileSync(join(destDir, '_category_.json'), JSON.stringify(categoryContent, null, 2));

  console.log(`Copied markdown content from ${name}`);
  position++;
}

// Reset position
position = 4;
for (const [name, url] of Object.entries(activity_repos)) {
  const repoDir = join(__dirname, 'temp_activity', name);
  const destDir = join(__dirname, 'docs', 'activities', name);

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


// Reset position
position = 2;
for (const [name, url] of Object.entries(project_repos)) {
  const repoDir = join(__dirname, 'temp_projects', name);
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