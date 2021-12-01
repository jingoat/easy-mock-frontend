import React, { useEffect, useState, useRef } from "react";
import Test1 from "../pages/components/test1";
import Test2 from "../pages/components/test2";
import Test3 from "../pages/components/test3";
import Test4 from "../pages/components/test4";

function App() {
  useEffect(() => {}, []);

  function combineComponents(...providers) {
    return ({ children }) =>
      providers.reduce((prev, CurrentProvider) => {
        // console.info("prev", prev);
        console.info("CurrentProvider", CurrentProvider);
        return <CurrentProvider>{prev}</CurrentProvider>;
      }, children);
  }

  const CombineTest = combineComponents(Test4, Test3, Test2, Test1);

  // return (
  //   <div className="App">
  //     <Test1>
  //       <Test2>
  //         <Test3>
  //           <Test4>5</Test4>
  //         </Test3>
  //       </Test2>
  //     </Test1>
  //   </div>
  // );

  return (
    <div className="App">
      <CombineTest>5555</CombineTest>
    </div>
  );
}

export default App;
