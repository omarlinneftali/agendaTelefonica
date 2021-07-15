export const isInvalidInput = (errors, name) => {
  if (errors && errors[name]) {
    return true;
  }
  return false;
};

export function isValidPhone(string = "") {
  const regEx = /^(\()?\d{3}-?(\))?\d{3}-?\d{4}$/;
  if (string && string.match(regEx)) return true;
  else return false;
}
