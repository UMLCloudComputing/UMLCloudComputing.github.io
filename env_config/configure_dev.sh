#!/bin/bash

# Prompt and read
clear
# echo "Select an environment type:"
# echo "--------------------------------"
# echo "1: Local (default)"
# echo "2: Dev"

# read -p "Choose a number (1 or 2): " choice

# case $choice in
#   1) ENV="local" ;;
#   2) ENV="dev" ;;
#   *) echo "Invalid choice. Exiting..."
#       exit 1;;
# esac
# echo "----------------------------------------------"

# Determine file type based on choice

# NEW: Changed to be exclusively for dev session with authentication
env_file=".env.dev" # Determines file name to source/create
gt_file="./env_config/.gt/dev.gt" # Determines the ground truth (gt) file to validate against

declare -A env_vars

# Check if the file exists
if [ -f "$env_file" ]; then
  # If the file exists, source it and validate the contents
  . ./env_config/validate_vars.sh "$gt_file" "$env_file"

else
  # If the file does not exist, prompt for and create it
  . ./env_config/process_gt.sh "$gt_file" "$env_file"

  # Then validate immediately
  . ./env_config/validate_vars.sh "$gt_file" "$env_file"
fi

set -a
source $env_file
export ENV

echo -e "Environment variables set successfully!\n"  
