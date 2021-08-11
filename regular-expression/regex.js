// This file will return "Valid password" if password provided as argument in CLI is matched with the condition, and return "Not a valid password" if it is not matched.

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  return regex.test(password) ? "Valid password" : "Not a valid password";
};

console.log(validatePassword(process.argv[2]));