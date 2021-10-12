import React from "react";

//?STYLES
import "./Login.css";

//?COMPONENTS
import Button from "../buttons/Button";
import Text from "../texts/Text";
import InputS from "../inputs/InputS";

const Login = ({ setIsLogged, isLogged }) => {
  //TODO: CHECK STACK OVERFLOW TO KNOW THE PLACEHOLDER MODIFICATIONS
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="Form form-login" onSubmit={handleSubmit}>
      <Text cName="txt-primary txt-xxl" text="Login" />
      <div className="form-box">
        <InputS
          id="lf-username"
          cName="is-primary input-m"
          type="text"
          placeholder="Username"
        />
        <InputS
          id="lf-password"
          cName="is-primary input-m"
          type="password"
          placeholder="Password"
        />
      </div>
      <Button cName="btn-secondary btn-medium" text="Login" type="submit" />
    </form>
  );
};

export default Login;
