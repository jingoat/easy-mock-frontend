import React, { useEffect, useState, useRef } from "react";

function App(props) {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>test4</div>
      <div>{props.children}</div>
    </div>
  );
}

export default App;
