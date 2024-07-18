#!/bin/bash
# Create component with $1 param name

cd ./src/uikit
mkdir $1
cd $1
touch $1.tsx
touch $1.module.scss
touch index.ts

printf ".$1 {\n\n}\n" >> $1.module.scss

printf "export * from './${1}.tsx';\n" >> index.ts

printf "import { FC } from 'react';\n" >> $1.tsx
printf "import s from './$1.module.scss';\n" >> $1.tsx
printf "export interface I${1}Props {\n}\n" >> $1.tsx
printf "\nexport const ${1}: FC<I${1}Props> = ({}) => {\n" >> $1.tsx
printf "  return (\n" >> $1.tsx
printf "    <div className={s.${1}}>\n" >> $1.tsx
printf "    </div>\n" >> $1.tsx
printf "  )\n" >> $1.tsx
printf "}\n" >> $1.tsx

cd ..
printf "\nexport * from './${1}';\n" >> index.ts