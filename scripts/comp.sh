#!/bin/bash

# Define the colors
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Accept the component name as a parameter
component_name=$1

# Base directory
base_directory="${2:-./src/components}"

# Check if component name is provided
if [ -z "$component_name" ]
then
  echo "Please provide the component name"
  exit 1
fi

# Full path to the new component
full_path="$base_directory/$component_name"

# Check if the directory already exists
if [ -d "$full_path" ]
then
  echo "Directory $full_path already exists, please delete it first."
  exit 1
fi

# Make the directory with the component name
mkdir $full_path

# Navigate to the new directory
cd $full_path

# Component.tsx
echo "import styles from './${component_name}.module.scss';

const ${component_name} = () => {
  return (
    <div className={styles.${component_name}}>
      {/* Component code goes here */}
    </div>
  );
};

export default ${component_name};" > ${component_name}.tsx

# index.ts
echo "import ${component_name} from './${component_name}';
export default ${component_name};" > index.ts

# Component.module.scss
echo ".${component_name} {}" > ${component_name}.module.scss

# Navigate back to the original directory
cd -

echo -e "${GREEN}Component $component_name created successfully in $full_path${NC}"
