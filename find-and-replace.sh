sed -i '' -E 's/(files?\??): string/\1: File/gi' types/*.d.ts
echo "Successfully replaced files"
