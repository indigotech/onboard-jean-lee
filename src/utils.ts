

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('O e-mail está com formato inválido. Por favor, corrija.');
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (password: string): boolean => {
  let validPassword = true;
  if (password.length < 7) {
    alert('Senha deve ter no mínimo 7 caracteres.');
    validPassword = false;
  }
  if (!/[a-z]|[A-Z]/.test(password)) {
    alert('Senha deve conter pelo menos 1 letra.');
    validPassword = false;
  }
  if (!/[0-9]/.test(password)) {
    alert('Senha deve conter pelo menos 1 número.');
    validPassword = false;
  }
  return validPassword;
};
