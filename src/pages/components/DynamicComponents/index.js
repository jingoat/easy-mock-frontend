import React, { useEffect, useState, useRef } from "react";

function App(props) {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>test1</div>
      <div>{props.children}</div>
    </div>
  );
}

export default App;
