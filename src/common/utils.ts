export const payloadToFormData = (payload: object): FormData | null => {
  if (
    typeof payload !== "object" ||
    Array.isArray(payload) ||
    (payload ?? null) === null
  )
    return null;

  const formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    if (Array.isArray(value))
      for (const val of value) formData.append(key, val);
    else if (value instanceof File) formData.append(key, value, value.name);
    else if (typeof value === "string") formData.append(key, value);
    else console.error(`Wrong value type:`, value);
  }

  return formData;
};
