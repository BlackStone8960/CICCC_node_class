const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  return regex.test(password);
};

console.log(validatePassword(process.argv[2]));