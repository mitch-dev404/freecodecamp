export function isFlat(data) {
  let valid = true;
  data.forEach((element) => {
    if (Array.isArray(element)) {
      valid = false;
    }
  });
  return valid;
}
