export const validateEmail = (email: string): string => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return 'Insira um e-mail válido.';
  } else {
    return '';
  }
};

export const validatePassword = (password: string): string => {
  if (password.length < 7) {
    return 'Senha deve ter no mínimo 7 caracteres.';
  }
  if (!/[a-z]|[A-Z]/.test(password)) {
    return 'Senha deve conter pelo menos 1 letra.';
  }
  if (!/[0-9]/.test(password)) {
    return 'Senha deve conter pelo menos 1 número.';
  }
  return '';
};

export const validateName = (name: string): string => {
  if (name) {
    return '';
  } else {
    return 'Insira um nome.'
  }
}

export const validatePhone = (phone: string): string => {
  const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  const isValid = regex.test(phone);
  if (!isValid) {
    return 'Insira um número válido.';
  }
  return '';
}

export const validateBirthDate = (birthDate: string): string => {
  const today = new Date;
  const inputDate = new Date(birthDate);
  if (inputDate > today  || !birthDate ) {
    return 'Selecione uma data de nascimento válida.';
  }
  return '';
}

export const validateRole = (role: string): string => {
  if (role !== 'user' && role !== 'admin') {
    return 'Role deve ser user ou admin.';
  }
  return '';
}

export const getAuthToken = (): string | null =>{ 
    return localStorage.getItem('auth-token')
};