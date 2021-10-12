import React from "react";

//?STYLES
import "./LoginPage.css";

//?COMPONENTS
import Login from "../../components/forms/Login";

const LoginPage = ({ setLoading, getLoggedInAccount }) => {
  return (
    <div className="LoginPage">
      <div className="box box-left">
        <Login
          setLoading={setLoading}
          getLoggedInAccount={getLoggedInAccount}
        />
      </div>
      <div className="box box-right">
        <h2>Welcome!</h2>
      </div>
    </div>
  );
};

export default LoginPage;
