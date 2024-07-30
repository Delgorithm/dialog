import { useRef } from "react";
import { Form } from "react-router-dom";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form method="POST" className="flex flex-col gap-2">
      <h2>Connexion</h2>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          autoComplete="email"
          required
        />
      </label>

      <label htmlFor="password">
        Mot de passe
        <input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          autoComplete="password"
          required
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Se connecter
      </button>
    </Form>
  );
}

export default SignUp;
