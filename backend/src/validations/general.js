const isValidPhone = (string = "") => {
  const regEx = /^(\()?\d{3}-?(\))?\d{3}-?\d{4}$/;
  if (string && string.match(regEx)) return true;
  else return false;
};
const isEmpty = (string) => {
  if (
    typeof string == "string" &&
    (!string?.trim() || string?.trim()?.length == 0)
  ) {
    return true;
  } else return false;
};
const hasEnoughLength = (string, minimunCount) => {
  if (string?.length >= minimunCount) return true;
  else return false;
};

module.exports = { isValidPhone, isEmpty, hasEnoughLength };
