export const validateInputLength = function (searchInputValue, inputLength) {
  if (searchInputValue.length > inputLength) {
    return true;
  } else {
    return false;
  }
};
