import React, { useState } from "react";

//?SERVICES
import AccountDataService from "../../services/account.service";
import Token from "../../services/token/Token";

//?STYLES
import "./Login.css";

//?SWEETALERT2
import Swal from "sweetalert2";

//?COMPONENTS
import Button from "../buttons/Button";
import Text from "../texts/Text";
import InputS from "../inputs/InputS";
import Checkbox from "../inputs/Checkbox";

const Login = ({ setLoading, getLoggedInAccount }) => {
  const [isShown, setIsShown] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  //TODO: CHECKBOX FIX
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading({
      isLoading: true,
      message: "Logging in...",
    });
    AccountDataService.login(values)
      .then((response) => {
        const data = response.data;
        if (data) {
          if (data.success) {
            Token.set(data.token);
            getLoggedInAccount();
            Swal.fire("Success", "Login successful!!!", "success");
          } else if (data.invalid) {
            Swal.fire("Invalid", "Invalid credentials", "invalid");
            setLoading({
              isLoading: false,
              message: "",
            });
          } else {
            Swal.fire("Failure", "Failed to login.", "info");
            setLoading({
              isLoading: false,
              message: "",
            });
          }
        } else {
          //failed
          Swal.fire("Failure", "Server did not send any data", "info");
          setLoading({
            isLoading: false,
            message: "",
          });
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Encountered an error while logging in.", "error");
        setLoading({
          isLoading: false,
          message: "",
        });
      });
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
