import React from "react";
import Tool from "./Tool";
import pythonLogo from "../assets/python.svg";

const LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

function App() {
  return (
    <>
      <Tool icon={pythonLogo} title="Python" text={LOREM} />
    </>
  );
}

export default App;
