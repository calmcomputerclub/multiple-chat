#!/bin/bash


store_name=$1
base_dir="${2:-./src/stores}"
capitalized_string=$(echo $store_name | awk '{first = toupper(substr($0,1,1)); rest = substr($0,2); print first rest}')

if [ -z "$store_name" ]
then
  echo "Please provide the store name"
  exit 1
fi



if [ -d "$full_path" ]
then
  echo "Directory $full_path already exists, please delete it first."
  exit 1
fi

cd $base_dir


echo "import { create } from 'zustand';
import { devtools, combine } from 'zustand/middleware';

const intiialState = {};
const name = '${capitalized_string}Store';

const use${capitalized_string}Store = create(
  devtools(
    combine(
      intiialState,
      (set) => ({})
    )
  )
);

export default use${capitalized_string}Store;
" >  ${store_name}.store.ts

