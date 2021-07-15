export const convertFileToBase64 = (file, callback) => {
  if (!file) return;
  let fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    callback(fileReader.result);
  });

  fileReader.readAsDataURL(file);
};
