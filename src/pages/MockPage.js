import React, { useEffect, useState, useRef } from "react";
import "./MockPage.style.css";

function MockPage() {
  useEffect(() => {}, []);

  return (
    <div className="mock-page">
      <div className="mock-top">1</div>
      <div className="mock-bottom">
        <div className="mock-bottom-left mock-bottom-item">2</div>
        <div className="mock-bottom-right mock-bottom-item">3</div>
      </div>
    </div>
  );
}

export default MockPage;
