import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Placeholder App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
