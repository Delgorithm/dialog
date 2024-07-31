export const validateEmail = (email) => {
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  return emailRegex.test(email) ? null : "Il faut une adresse mail valide";
};

export const validateUsername = (username) =>
  username.length >= 8
    ? null
    : "Le pseudonyme doit contenir au moins 8 caractères";

export const validatePasswords = (password, confirmPassword) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Le mot de passe doit contenir au moins 8 caractères, une majuscule,  une minuscule, un chiffre et un caractère spécial (@#$%^&+=)";
  }
  if (password !== confirmPassword) {
    return "Les mots de passe ne correspondent pas";
  }
  return null;
};
