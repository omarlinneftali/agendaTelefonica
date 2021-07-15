export const getInputValue = (input) => {
  if (input?.type === "checkbox") {
    return input?.checked;
  }

  if (input?.type === "date") {
    return input?.value?.toString();
  }

  if (input?.type === "file") {
    return input?.files;
  }
  return input?.value;
};


