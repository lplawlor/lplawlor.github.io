import React from "react";
import Tool from "./Tool";
import pythonIcon from "@iconify/icons-devicon/python";

const LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

function App() {
  return (
    <>
      <Tool icon={pythonIcon} title="Python" text={LOREM} />
    </>
  );
}

export default App;
