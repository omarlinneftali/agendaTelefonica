export const isValueStartsWith = (value = "", filter = "") =>
  value?.trim()?.toLowerCase()?.startsWith(filter?.trim()?.toLowerCase());
