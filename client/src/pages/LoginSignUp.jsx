import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

const LoginSignUp = () => {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    const newMode = mode === "login" ? "signup" : "login";
    setMode(newMode);
  };

  return (
    <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}>
      <section
        className={`form-block form-block--is-${mode} mx-auto mt-16 w-72 bg-opacity-25 bg-white p-6 rounded-lg shadow-md`}
      >
        <header className="form-block__header mb-6">
          <h1 className="text-2xl font-semibold">
            {mode === "login" ? "Welcome back!" : "Create a new Account."}
          </h1>
        </header>
        <AuthForm
          mode={mode}
          onSubmit={() => console.log("submit")}
          toggleMode={toggleMode}
        />
      </section>
    </div>
  );
};

export default LoginSignUp;
