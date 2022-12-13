import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import HourlyForecast from "../HourlyForecast/HourlyForecast";

import styles from "./DailyForecast.module.css";

import cloudy from "./cloudy.png";
import { getIcon, dateToHourConverter, dateToDayConverter } from "../../helpers/helpers";

const DailyForecast = ({ currentWeatherData, hourlyWeatherData, timezone }) => {
  console.log(currentWeatherData)
  return (
    <Card className={styles["df__wrapper"]}>
      <Card className={styles["df__main--icon-wrapper"]}>
        <img
          src={getIcon(currentWeatherData.weather[0].icon, "4")}
          alt="Icon"
          className={styles["df__main--icon"]}
        />
      </Card>
      <Card className={styles["day__wrapper"]}>
        <p>{dateToDayConverter(currentWeatherData.dt)}</p>
      </Card>
      <Card className={styles["df__top"]}>
        <p className="font__medium">{timezone}</p>
        <p className={styles["df__top--degree"]}>
          {typeof currentWeatherData.temp === "number"
            ? currentWeatherData.temp < 1
              ? "0"
              : Math.round(currentWeatherData.temp)
            : currentWeatherData.temp.day < 1
            ? "0"
            : Math.round(currentWeatherData.temp.day)}
          °C
        </p>
        <p className="font__medium">
          {currentWeatherData.weather[0].description}
        </p>
        <p className="font__sm">
          Updated as of {dateToHourConverter(currentWeatherData.dt)}
        </p>
      </Card>
      <Card className={styles["df__middle"]}>
        <div>
          <p className="font__sm text__align--right">
            <span className="font__sm">Feels Like </span>
            {typeof currentWeatherData["feels_like"] === "number"
              ? Math.round(currentWeatherData["feels_like"])
              : Math.round(currentWeatherData["feels_like"].day)}
            °C
          </p>
        </div>
        <div>
          <p className="text__align--center">
            <span className="font__sm">Wind</span> 17Km/h
          </p>
        </div>
        <div>
          <p>
            <span className="font__sm">Humidity</span>{" "}
            {currentWeatherData.humidity}%
          </p>
        </div>
      </Card>
      <Card className={styles["df__bottom"]}>
        <div>
          <p className="font__sm text__align--center">Sunrise</p>
          <p className="text__align--center">
            <i class="las la-sun"></i>{" "}
            {dateToHourConverter(currentWeatherData.sunrise)}
          </p>
        </div>
        <div>
          <p className="font__sm text__align--center">Sunset</p>
          <p className="text__align--center">
            <i class="las la-sun"></i>{" "}
            {dateToHourConverter(currentWeatherData.sunset)}
          </p>
        </div>
        {currentWeatherData.moonrise !== undefined && (
          <div>
            <p className="font__sm">Moonrise</p>
            <p>
              <i class="las la-cloud-moon"></i>{" "}
              {dateToHourConverter(currentWeatherData.moonrise)}
            </p>
          </div>
        )}
        {currentWeatherData.moonset !== undefined && (
          <div>
            <p className="font__sm">Moonset</p>
            <p>
              <i class="las la-cloud-moon"></i> {dateToHourConverter(currentWeatherData.moonset)}
            </p>
          </div>
        )}
      </Card>
      <Card className={styles["hw__wrapper"]}>
        <HourlyForecast hourlyWeatherData={hourlyWeatherData} />
      </Card>
    </Card>
  );
};

export default DailyForecast;
