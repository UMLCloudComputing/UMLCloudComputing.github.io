#! /usr/bin/bash
# Be sure to use dos2unix if editing on Windows or macOS
git pull origin main
# ASSUMING ALL PROJECTS HAVE BEEN ADDED AS GIT SUBMODULES
# To include a new project into the list of added projects
# add it's proper name into the sequence below called `projects`
projects=("UniPath.io" "rowdybot" "react-mui-resume")
git submodule foreach git pull origin main
for i in "${projects[@]}"; do
    rsync ./submodules/$i/docs/web_docs/* ./docs/projects/$i
done
