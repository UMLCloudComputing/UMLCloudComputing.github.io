#!/bin/bash

# Validates environment variables against ground truth file

# Args
# 1: Ground truth file
# 2: Environment file to source
gt_file=$1
env_file=$2
is_invalid=false

declare -A env_vars
source "$env_file"

validate_var() {
    local var_name=$1
    # Return non-zero value if variable name is invalid  
    if [[ -z "$var_name" ]] || [[ -z "${!var_name}" ]]; then
        return 1
    fi 
    return 0;
}

# Read env vars from gt file
while IFS= read -r line; do
    # Skip preprocessing, input is assumed to be in the correct format
    variable_name=$line

    # Check if variable name has not been checked before (avoid duplicates)
    if [[ ! ${env_vars[$variable_name]} ]]; then
        if validate_var "$variable_name"; then
            echo -e "+  $variable_name configured!"
        else 
            echo -e "-  $variable_name is not configured!"
            is_invalid=true
        fi
    
    fi
done < "$gt_file"

# Conditionally set exit status
if [ "$is_invalid" = true ]; then
    echo -e "Invalid configuration, please check if variables are configured as per $gt_file!\n"
    exit 3
else 
    echo -e "Environment variables validated against $gt_file"
    echo -e "----------------------------------------------";
fi