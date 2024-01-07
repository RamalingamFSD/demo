import React from "react";

function App() {
  const now = new Date();
  return <div>Time is now {now.toLocaleTimeString()}</div>;
}

export default App;
