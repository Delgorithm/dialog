import { useState } from "react";
import {
  validateEmail,
  validateUsername,
  validatePasswords,
} from "./validationRegister";

const useForm = () => {
  const [errors, setErrors] = useState({});

  const validate = (fields) => {
    const newErrors = {};
    const { username, email, password, confirmPassword } = fields;

    newErrors.username = validateUsername(username);
    newErrors.email = validateEmail(email);
    newErrors.password = validatePasswords(password, confirmPassword);

    setErrors(newErrors);
    return Object.keys(newErrors).every((key) => !newErrors[key]);
  };

  return {
    errors,
    validate,
  };
};

export default useForm;
