import React, { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("use effect...", count);
  //   const timer = setInterval(() => {
  //     console.log("timer...count:", count);
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  const countRef = useRef(0);
  useEffect(() => {
    console.log("use effect...", count);
    const timer = setInterval(() => {
      console.log("timer...count:", countRef.current);
      setCount(++countRef.current);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <div className="App">{count}</div>;
}

export default App;
