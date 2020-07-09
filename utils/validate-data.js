function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  return password.length > 7 && password.length < 30;
}

function validateGender(gender) {
  const g = gender.toLowerCase();
  return g === "feminino" || g === "masculino";
}

function validateName(name) {
  const rgx = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
  return rgx.test(String(name).toLocaleLowerCase());
}

function validateCPF(inputCPF) {
  let soma = 0;
  let resto;

  if (inputCPF == "00000000000") return false;
  for (i = 1; i <= 9; i++)
    soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(inputCPF.substring(9, 10))) return false;

  soma = 0;
  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(inputCPF.substring(10, 11))) return false;
  return true;
}

module.exports = {
  validateEmail,
  validatePassword,
  validateGender,
  validateName,
  validateCPF,
};
