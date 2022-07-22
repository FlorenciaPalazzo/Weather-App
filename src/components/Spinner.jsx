import React from "react";
import "../index.scss";

export default function Spinner() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto mt-5">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
