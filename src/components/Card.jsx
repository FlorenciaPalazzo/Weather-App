import React from "react";
import Spinner from "./Spinner";

const Card = ({ loading, show, weather, forecast }) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var date = day + "/" + month + "/" + year;

  var url = "";
  var iconUrl = "";

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if (loading) {
    return <Spinner />;
  }

  if (show) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "  " +
      forecast.list[1].dt_txt.substring(11, 13);

    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "  " +
      forecast.list[2].dt_txt.substring(11, 13);

    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "  " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-5">
      {show === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-lg-4">
                <h3 className="card-title">{weather.name}</h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">
                  {(weather.main.temp - 273.15).toFixed(1)}ºC
                </h1>
                <p className="card-desc">
                  <img src={iconUrl} alt="icon" />
                  {weather.weather[0].description}
                </p>
                <img
                  src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-fluid "
                  alt=".."
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body text-start mt-2">
                  <div className="row ">
                    <h5 className="col-6 col-xl-12 card-text text-center ">
                      Temp. máx. : {(weather.main.temp_max - 273.15).toFixed(1)}{" "}
                      ºC
                    </h5>
                    <h5 className="col-6 col-xl-12 card-text text-center">
                      Temp. min. : {(weather.main.temp_min - 273.15).toFixed(1)}{" "}
                      ºC
                    </h5>
                    <h5 className="col-6 col-xl-12 card-text text-center ">
                      Sensación :{" "}
                      {(weather.main.feels_like - 273.15).toFixed(1)} ºC
                    </h5>
                    <h5 className="col-6 col-xl-12 card-text text-center">
                      Humedad : {weather.main.humidity} %
                    </h5>
                    <h5 className="col-6 col-xl-12 card-text text-center">
                      Viento : {weather.wind.speed} m/s
                    </h5>
                  </div>
                  <hr />
                  <div className="row mt-4">
                    <div className="col text-center forecast-text">
                      <p>{forecastDate3} hr</p>
                      <p>
                        <img src={iconUrl3} alt="icon" />
                      </p>
                      <p className="description">
                        {" "}
                        {forecast.list[1].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[1].main.temp - 273.15).toFixed(1)} ºC
                      </p>
                    </div>
                    <div className="col text-center forecast-text">
                      <p>{forecastDate6} hr</p>
                      <p>
                        <img src={iconUrl6} alt="icon" />
                      </p>
                      <p className="description">
                        {forecast.list[2].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[2].main.temp - 273.15).toFixed(1)} ºC
                      </p>
                    </div>
                    <div className="col text-center forecast-text">
                      <p>{forecastDate9} hr</p>
                      <p>
                        <img src={iconUrl9} alt="icon" />
                      </p>
                      <p className="description">
                        {forecast.list[3].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[3].main.temp - 273.15).toFixed(1)} ºC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-dark text-center">Sin datos</h2>
      )}
    </div>
  );
};
export default Card;
