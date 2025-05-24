#!/bin/bash

# Prompts environment variables as per ground truth file
# Exports environment variables to environment file

# Define the file which needs to be read as ground truth
gt_file=$1
env_file=$2

declare -A env_vars

prompt_for_env_var() {
    local var_name=$1
    echo "$var_name: "
    read -r value
    env_vars[$var_name]=$value
}

# Read env vars from gt file
while IFS=read -r line; do
    # Skip preprocessing, input is assumed to be in the correct format
    variable_name=$line

    # Check if variable name has not been asked for before (avoid duplicates)
    if [[ ! ${env_vars[$variable_name]} ]]; then
        prompt_for_env_var "$variable_name"
    fi

    # Uncomment if implementing custom `gt` file format validation
    # else
    # echo "Error: Invalid format. Expected ..., found '$line'". Skipping..."
    #fi
done < "$gt_file"

# Export environment variables to destination file
for key in "${!env_vars[@]}"; do
    echo -e "$key=${env_vars[$key]}\n" >> "$env_file"
done

echo -e "\tEnvironment variables exported to $env_file\n"
echo -e "---------------------------------------------\n"