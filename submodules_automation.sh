#! /usr/bin/bash
# Be sure to use dos2unix if editing on Windows or macOS
git pull origin main
# ASSUMING ALL PROJECTS HAVE BEEN ADDED AS GIT SUBMODULES
# To include a new project into the list of added projects
# add it's proper name into the sequence below called `projects`
git submodule update --init
git submodule foreach git pull origin main
projects=("UniPath.io" "rowdybot" "react-mui-resume")
for i in "${projects[@]}"; do
    rsync ~/UMLCloudComputing.github.io/submodules/$i/docs/web_docs/* ~/UMLCloudComputing.github.io/docs/projects/$i
done
