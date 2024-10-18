import { useState, useEffect } from "react";
import SignUp from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";

function App() {
  const [signedUp, setSignedUp] = useState(false);
  const [tokenId, setTokenId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenId(token);
  }, []);

  function updateToken(value) {
    localStorage.setItem("token", value);
    setTokenId(value);
  }

  return (
    <>
      {tokenId ? (
        <Dashboard updateSignUpStatus={setSignedUp} updateToken={updateToken} />
      ) : signedUp ? (
        <Signin updateSignUpStatus={setSignedUp} updateToken={updateToken} />
      ) : (
        <SignUp updateSignUpStatus={setSignedUp} />
      )}
    </>
  );
}

export default App;
