import { useRef, useState } from "react";
import { Form } from "react-router-dom";

function Register() {
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (username.length < 5) {
      newErrors.username = "Le pseudonyme doit contenir au moins 5 caractères";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Il faut une adresse mail valide";
    }

    if (password.length < 8) {
      newErrors.password = "Les mots de passe ne correspondent pas";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }

    setErrors(newErrors);
  };

  return (
    <section>
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <label htmlFor="username">
          Nom d'utilisateur
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nom d'utilisateur"
            ref={usernameRef}
            required
          />
          {errors.username && <p>{errors.username}</p>}
        </label>
        <label htmlFor="email">
          E-mail
          <input type="email" />
        </label>
      </Form>
    </section>
  );
}

export default Register;
