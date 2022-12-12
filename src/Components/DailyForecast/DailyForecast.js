import React from "react";

import Card from "../UI/Card";

import HourlyForecast from "../HourlyForecast/HourlyForecast";

import styles from "./DailyForecast.module.css";

import cloudy from "./cloudy.png";

const DailyForecast = ({ weatherData }) => {
  return (
    <Card className={styles["df__wrapper"]}>
      <Card className={styles["df__main--icon-wrapper"]}>
        <img src={cloudy} alt="Icon" className={styles["df__main--icon"]} />
      </Card>
      <Card className={styles["df__top"]}>
        <p>Monrovia Liberia</p>
        <p className={styles["df__top--degree"]}>31°C</p>
        <p>Mostly Cloudy</p>
      </Card>
      <Card className={styles["df__middle"]}>
        <div>
          <p className="font__sm text__align--right">
            <span className="font__sm">Feels Like</span> 38°
          </p>
        </div>
        <div>
          <p className="text__align--center">
            <span className="font__sm">Wind</span> 17Km/h
          </p>
        </div>
        <div>
          <p>
            <span className="font__sm">Humidity</span> 71%
          </p>
        </div>
      </Card>
      <Card className={styles["df__bottom"]}>
        <div>
          <p className="font__sm text__align--center">Sunrise</p>
          <p className="text__align--center">
            <i class="las la-sun"></i> 7:55 AM
          </p>
        </div>
        <div>
          <p className="font__sm text__align--center">Sunset</p>
          <p className="text__align--center">
            <i class="las la-sun"></i> 7:55pm
          </p>
        </div>
        <div>
          <p className="font__sm">Moonrise</p>
          <p>
            <i class="las la-cloud-moon"></i> 9:33 PM
          </p>
        </div>
        <div>
          <p className="font__sm">Moonset</p>
          <p>
            <i class="las la-cloud-moon"></i> 4:32 AM
          </p>
        </div>
      </Card>
      <HourlyForecast />
    </Card>
  );
};

export default DailyForecast;
