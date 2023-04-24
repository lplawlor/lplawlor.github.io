import React from "react";
import LinkedInBadge from "./LinkedInBadge";
import Div100vh from "react-div-100vh";
import "../styles/App.css";

function App() {
  return (
    <Div100vh id="app">
      <div className="d-flex flex-column align-items-center my-auto">
        <h3 className="text-center">This site is under construction.</h3>
        <h3 className="text-center mb-3">
          In the meantime, please visit my LinkedIn profile!
        </h3>
        <LinkedInBadge />
      </div>
      <footer className="ms-auto me-2 mt-auto mb-2 small">
        Made with React & Bootstrap
      </footer>
    </Div100vh>
  );
}

export default App;
