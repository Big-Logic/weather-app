import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import WeekDays from "./WeekDays";

import MainIconBox from "./MainIconBox";

import BackToCurrent from "./BackToCurrent";

import WeatherForecast from "./WeatherForecast";

import HourlyForecast from "./HourlyForecast/HourlyForecast";

import styles from "./DailyForecast.module.css";

const DailyForecast = ({
  currentWeatherData,
  hourlyWeatherData,
  timezone,
  backToCurrentShow,
  setCurrentWeatherData,
  currentWeatherDataStable,
  setBackToCurrentShow,
  currentWeatherWeekDays,
  setCurrentWeatherWeekDays
}) => {
  return (
    <Card className={styles["df__wrapper"]}>
      <MainIconBox iconSrc={currentWeatherData.weather[0].icon} />
      <WeekDays weekDay={currentWeatherData.dt} currentWeatherWeekDays={currentWeatherWeekDays}/>
      {backToCurrentShow && (
        <BackToCurrent
          currentWeatherDataStable={currentWeatherDataStable}
          setCurrentWeatherData={setCurrentWeatherData}
          setBackToCurrentShow={setBackToCurrentShow}
          setCurrentWeatherWeekDays={setCurrentWeatherWeekDays}
        />
      )}
      <WeatherForecast
        currentWeatherData={currentWeatherData}
        timezone={timezone}
        currentWeatherDataStable={currentWeatherDataStable}
      />
      <Card className={styles["hw__wrapper"]}>
        <HourlyForecast hourlyWeatherData={hourlyWeatherData} />
      </Card>
    </Card>
  );
};

export default DailyForecast;
