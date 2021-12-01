import React, { useEffect } from "react";
import "./App.css";
import MockPage from "./pages/MockPage";

function App() {
  useEffect(() => {
    // fetch("api/add/test1/test2/test3/test5", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     mockData: JSON.stringify({
    //       code: 0,
    //       data: [{ name: "gavin", age: 28 }]
    //     })
    //   })
    // })
    //   .then(function(response) {
    //     return response.text();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //   });
    // fetch("api/update/18", {
    //   method: "PUT",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     mockData: JSON.stringify({
    //       code: 0,
    //       data: [{ name: "gavin", age: 30 }]
    //     })
    //   })
    // })
    //   .then(function(response) {
    //     return response.text();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //   });
    // fetch("api/mock/test1/test2/test3/test4", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    //   // body: JSON.stringify({
    //   //   path: "/getEnum"
    //   // })
    // })
    //   .then(function(response) {
    //     return response.text();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //   });
    // fetch("api/delete/20", {
    //   method: "DELETE",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     test: 1
    //   })
    // })
    //   .then(function(response) {
    //     return response.text();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //   });
  });

  return (
    <div className="App">
      <MockPage />
    </div>
  );
}

export default App;
