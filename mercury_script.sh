#!/usr/bin/bash

# cd ~/UMLCloudComputing.github.io
git pull origin main
git submodule foreach git pull origin main
cp submodules/UniPath.io/docs/web_docs/* docs/projects/unipath
cp submodules/rowdybot/docs/web_docs/* docs/projects/rowdybot
cp submodules/react-resume
npm run build
npm run serve