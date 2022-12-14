import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import CountryImage from "./CountryImage";

import WeeklyForecastPre from "./WeeklyForecastPre";

import styles from "./WeeklyForecast.module.css";



const WeeklyForecast = ({ dailyWeatherData, setCurrentWeatherData, setBackToCurrentShow }) => {
  const [btnBgUpdate, setBtnBgUpdate] = useState(undefined);
  const handleClick = ({ target }) => {
    // console.log(
    //   dailyWeatherData.filter(
    //     (ele) => ele.dt.toString() === target.closest("button").id
    //   )
    // );
    setCurrentWeatherData(
      dailyWeatherData.filter(
        (ele) => ele.dt.toString() === target.closest("button").id
      )[0]
    );
    setBtnBgUpdate(target.closest("button").id);
    setBackToCurrentShow(true);
    // console.log(target.dataset.dt);
  };

  useEffect(()=> {
    if(btnBgUpdate !== undefined) {
      const allWeeklyBtn = document.querySelectorAll(".weekly__btn");
      allWeeklyBtn.forEach(ele => {
          // ele.classList.remove("weekly__btn--with-bg");
          console.log(ele.id)
      })

    //  console.log(document
    //     .querySelector(`#${btnBgUpdate}`));
        // .classList.add("weekly__btn--with-bg");

      console.log(allWeeklyBtn);
    }
  }, [btnBgUpdate])

  return (
    <Card className={styles["weekly__forecast--wrapper"]}>
      <CountryImage />
      <WeeklyForecastPre dailyWeatherData={dailyWeatherData} handleClick={handleClick} />
    </Card>
  );
};

export default WeeklyForecast;
