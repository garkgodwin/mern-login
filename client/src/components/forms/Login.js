import React, { useState } from "react";

//?STYLES
import "./Login.css";

//?COMPONENTS
import Button from "../buttons/Button";
import Text from "../texts/Text";
import InputS from "../inputs/InputS";
import Checkbox from "../inputs/Checkbox";

const Login = ({ setIsLogged, isLogged }) => {
  const [isShown, setIsShown] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  //TODO: CHECKBOX FIX
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleShow = (checked) => {
    setIsShown(checked);
  };

  const handleUsernameChange = (username) => {
    setValues({
      ...values,
      username: username,
    });
  };
  const handlePasswordChange = (password) => {
    setValues({
      ...values,
      password: password,
    });
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
          value={values.username}
          handleChange={handleUsernameChange}
        />
        <InputS
          id="lf-password"
          cName="is-primary input-m"
          type={isShown ? "text" : "password"}
          placeholder="Password"
          value={values.password}
          handleChange={handlePasswordChange}
        />
        <Checkbox
          cName="cb-primary input-s"
          id="lf-show-password"
          text={isShown ? "Hide" : "Show"}
          checked={isShown}
          handleChange={handleShow}
        />
      </div>
      <Button cName="btn-secondary btn-medium" text="Login" type="submit" />
    </form>
  );
};

export default Login;
