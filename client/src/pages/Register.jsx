import { useRef } from "react";
import { Form } from "react-router-dom";
import useForm from "../utils/useForm";

function Register() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { errors, validate } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    if (validate(fields)) {
      console.log("Form is valid");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <section>
      <Form method="POST" className="flex flex-col gap-2">
        <h2>Inscription</h2>
        <label htmlFor="username" className="">
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
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            ref={emailRef}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </label>

        <label htmlFor="password">
          Mot de passe
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            ref={passwordRef}
            autoComplete="password"
            required
          />
        </label>

        <label htmlFor="confirmPassword">
          Confirmation du mot de passe
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            ref={confirmPasswordRef}
            autoComplete="confirmPassword"
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </label>
        <button type="submit" onClick={handleSubmit}>
          S'inscrire
        </button>
      </Form>
    </section>
  );
}

export default Register;
