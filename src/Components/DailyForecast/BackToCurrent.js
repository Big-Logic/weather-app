import React from "react";

import styles from "./BackToCurrent.module.css";

const BackToCurrent = ({setCurrentWeatherData, currentWeatherDataStable, setBackToCurrentShow, setCurrentWeatherWeekDays}) => {
  const handleClick = () => {
    setCurrentWeatherData(currentWeatherDataStable);
    setBackToCurrentShow(false);
    setCurrentWeatherWeekDays("Current Weather");
  }
  return (
    <button className={`${styles["back__to--current-btn"]} btn__unset`} onClick={handleClick}>
      <i class="las la-angle-left"></i> Back to current
    </button>
  );
};

export default BackToCurrent;
