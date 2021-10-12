import "./App.css";

//?PAGES
//*GUEST PAGES
import LoginPage from "./pages/Guest/LoginPage";
//*AUTHED APGES
import AuthedHomePage from "./pages/Authed/HomePage";

//?COMPONENTS
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {isLogged ? (
        <div className="pages pages-authed">
          <AuthedHomePage isLogged />
        </div>
      ) : (
        <div className="pages pages-guest">
          <LoginPage setIsLogged isLogged />
        </div>
      )}
    </div>
  );
}

export default App;
