import React, { useState } from "react";
import axios from "axios";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";

const LoginSignUp = () => {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    const newMode = mode === "login" ? "signup" : "login";
    setMode(newMode);
  };

  const handleSubmit = async (formData) => {
    try {
      let response;
      if (mode === "login") {
        response = await axios.post("http://localhost:3000/login", formData);
      } else {
        response = await axios.post("http://localhost:3000/signup", formData);
      }
      // Handle successful login/signup
      const { success, token } = response.data;
      if (success && token) {
        // Save token to localStorage
        localStorage.setItem("authToken", token);
        // Redirect to home page
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Authentication error:", error.response.data);
    }
  };

  return (
    <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}>
      <Navbar />
      <div className=" py-32">
        <section
          className={`form-block form-block--is-${mode} mx-auto w-72 bg-opacity-25 bg-white p-6 rounded-lg shadow-md`}
        >
          <header className="form-block__header mb-6">
            <h1 className="text-2xl font-semibold">
              {mode === "login" ? "Welcome back!" : "Create a new Account."}
            </h1>
          </header>
          <AuthForm
            mode={mode}
            onSubmit={handleSubmit}
            toggleMode={toggleMode}
          />
        </section>
      </div>
    </div>
  );
};

export default LoginSignUp;
