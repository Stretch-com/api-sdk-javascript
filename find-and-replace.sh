find . -type f -name '*.d.ts' -exec sed -i '' s/"files: string"/"files: File"/g {} +
find . -type f -name '*.d.ts' -exec sed -i '' s/"files?: string"/"files?: File"/g {} +
find . -type f -name '*.d.ts' -exec sed -i '' s/"file: string"/"file: File"/g {} +
find . -type f -name '*.d.ts' -exec sed -i '' s/"file?: string"/"file?: File"/g {} +
