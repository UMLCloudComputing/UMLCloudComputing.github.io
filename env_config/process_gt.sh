#!/bin/bash

# Prompts environment variables as per ground truth file
# Exports environment variables to environment file

# WARNING: Flushes env file before writing!

# Args:
# 1: Ground truth file
# 2: Environment file to source
gt_file=$1
env_file=$2

declare -A env_vars

read_and_prompt() {
    local line
    # Read env vars from gt file
    while IFS= read -r line; do
        # Skip preprocessing, input is assumed to be in the correct format
        local var_name="$line"

        # Check if variable name has not been asked for before (avoid duplicates)
        if [[ ! ${env_vars[$var_name]} ]]; then
            echo -n "$var_name: "
            read value < /dev/tty
            env_vars[$var_name]=$value
        fi

        # Uncomment if implementing custom `gt` file format validation
        # else
        # echo "Error: Invalid format. Expected ..., found '$line'". Skipping..."
        #fi
    done
}

# Read and prompt for env vars
read_and_prompt < "$gt_file"

# Flush file
:> "$env_file"

# Export environment variables to destination file
for key in "${!env_vars[@]}"; do
    echo "$key=\"${env_vars[$key]}\"" >> "$env_file"
done

echo -e "\nEnvironment variables exported to $env_file"
echo -e "---------------------------------------------\n"