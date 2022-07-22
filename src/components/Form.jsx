import React from "react";
import { useState } from "react";

export default function Form({ newLocation }) {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;
    newLocation(city);
  };

  return (
    <div className="container-fluid">
      <form onSubmit={onSubmit}>
        <div className="input-group mt-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad"
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-dark">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
