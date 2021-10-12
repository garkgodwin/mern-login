import { useEffect, useState } from "react";

//?SERVICES
import AccountDataService from "./services/account.service";
import Token from "./services/token/Token";

//?STYLES
import "./App.css";

//?SWEETALERT2
import Swal from "sweetalert2";

//?PAGES
//*GUEST PAGES
import LoginPage from "./pages/Guest/LoginPage";
//*AUTHED APGES
import AuthedHomePage from "./pages/Authed/HomePage";

//?COMPONENTS
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loading/Loader";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState({
    isLoading: false,
    message: "",
  });

  //?ON MOUNT
  useEffect(() => {
    localStorage.clear();
    getLoggedInAccount();
  }, []);

  useEffect(() => {
    //set loading false either null or with data
    setLoading({
      isLoading: false,
      message: "",
    });
  }, [userData]);

  const getLoggedInAccount = () => {
    if (Token.get() !== "") {
      setLoading({
        isLoading: true,
        message: "Checking credentials...",
      });
      AccountDataService.getLoggedInAccount()
        .then((response) => {
          const data = response.data;
          if (data.success) {
            setUserData(data.data); // data.data is the returned data which is the user
            setIsLogged(true);
            Swal.fire("Success", "Your credentials are valid.", "success");
          } else {
            setUserData(null);
            Swal.fire("Failure", "Server did not send any data", "info");
          }
        })
        .catch((error) => {
          setUserData(null);
          Swal.fire(
            "Error",
            "Encountered an error while checking credentials",
            "error"
          );
        });
    } else {
      //welcome message
      Swal.fire(
        "WELCOME",
        "Welcome to GG Login System using MERN-stack",
        "success"
      );
    }
  };

  return (
    <div className="App">
      <Navbar userData={userData} />
      {isLogged ? (
        <div className="pages pages-authed">
          <AuthedHomePage />
        </div>
      ) : (
        <div className="pages pages-guest">
          <LoginPage
            setLoading={setLoading}
            getLoggedInAccount={getLoggedInAccount}
          />
        </div>
      )}

      <Loader loading={loading} />
    </div>
  );
}

export default App;
