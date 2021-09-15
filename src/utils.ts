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

export const validatePhone = (phone: string): boolean => {
  const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  const isValid = regex.test(phone);
  if (!isValid) {
    alert('Insira um telefone válido, sem espaços ou parênteses.');
  }
  return isValid;
}

export const validateBirthDate = (birthDate: string): boolean => {
  const today = new Date;
  const inputDate = new Date(birthDate);
  if (inputDate > today) {
    alert('Selecione uma data de nascimento válida.');
    return false;
  }
  return true;
}

export const getAuthToken = (): string | null =>{ 
    return localStorage.getItem('auth-token')
};