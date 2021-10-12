import React from "react";

//?STYLES
import "./LoginPage.css";

//?COMPONENTS
import Login from "../../components/forms/Login";

const LoginPage = ({ setIsLogged, isLogged }) => {
  return (
    <div className="LoginPage">
      <div className="box box-left">
        <Login setIsLogged isLogged />
      </div>
      <div className="box box-right">
        <h2>Welcome!</h2>
      </div>
    </div>
  );
};

export default LoginPage;
