export function checkLower(password) {
  const regex = /[a-z]/;
  //   const regex = new RegExp(/[a-z]/);
  return regex.test(password);
}

export function checkUpper(password) {
  const regex = /[A-Z]/;
  return regex.test(password);
}

export function checkNumber(password) {
  //   const regex = /d/;
  const regex = /[0-9]/;

  return regex.test(password);
}

export function checkMin8(password) {
  if (password.length >= 8) return true;
  return false;
}

export function checkSpecialChar(password) {
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  return regex.test(password);
}

export function checkAll(password) {
  const regex1 = /[a-z]/;
  const regex2 = /[A-Z]/;
  const regex3 = /[0-9]/;
  const regex4 = /[!@#$%^&*(),.?":{}|<>]/;
  return (
    regex1.test(password) &&
    regex2.test(password) &&
    regex3.test(password) &&
    regex4.test(password) &&
    password.length >= 8
  );
}
