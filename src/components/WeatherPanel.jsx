import React from "react";
import { useState } from "react";
import Form from "./Form";
import Card from "./Card";

export default function WeatherPanel() {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_URLKEY}&lang=es`;
  let urlCity = "&q=";

  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_URLKEY}&lang=es`;

  const [weather, setWeather] = useState([]); //para el clima
  const [forecast, setForecast] = useState([]); // para la prediccion
  const [loading, setLoading] = useState(false); // para el spinner que esta cargando
  const [show, setShow] = useState(false); //para mostrar la ciudad buscada
  const [location, setLocation] = useState(""); //para ver la ubicacion que se envia por formulario

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //weather
    urlWeather = urlWeather + urlCity + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response }; //en el caso que haya algun error
        return response.json(); //sino que me pase toda la info en formato json
      })
      .then((wheatherData) => {
        //si ha ido todo bien
        console.log(wheatherData);
        setWeather(wheatherData); //vamos a meter la info en ese array
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // que no gire el spinner, pà que? jaja
        setShow(false); // en caso de haber error no queremos que se muestre nada
      });

    //forecast

    urlForecast = urlForecast + urlCity + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response }; //en el caso que haya algun error
        return response.json(); //sino que me pase toda la info en formato json
      })
      .then((forecastData) => {
        //si ha ido todo bien
        console.log(forecastData);
        setForecast(forecastData); //vamos a meter la info en ese array
        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // que no gire el spinner, pà que? jaja
        setShow(false); // en caso de haber error no queremos que se muestre nada
      });
  };
  return (
    <div>
      <Form newLocation={getLocation} />
      <Card
        show={show}
        loading={loading}
        weather={weather}
        forecast={forecast}
      />
    </div>
  );
}
