import React from "react";
import LinkedInBadge from "./LinkedInBadge";

function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center my-auto">
        <h3>This site is under construction.</h3>
        <h3 className="mb-3">
          In the meantime, please visit my LinkedIn profile!
        </h3>
        <LinkedInBadge />
      </div>
      <footer className="ms-auto me-2 mt-auto mb-2 small">
        Made with React & Bootstrap
      </footer>
    </>
  );
}

export default App;
