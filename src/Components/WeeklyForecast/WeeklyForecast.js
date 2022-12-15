import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import CountryImage from "./CountryImage";

import WeeklyForecastPre from "./WeeklyForecastPre";

import SearchButton from "./SearchButton";

import { dateToDayConverter } from "../../helpers/helpers";

import styles from "./WeeklyForecast.module.css";



const WeeklyForecast = ({
  dailyWeatherData,
  setCurrentWeatherData,
  setBackToCurrentShow,
  setCurrentWeatherWeekDays,
  setSearchFormDisplay
}) => {
  const [btnBgUpdate, setBtnBgUpdate] = useState(undefined);
  const handleClick = ({ target }) => {
    // console.log(
    //   dailyWeatherData.filter(
    //     (ele) => ele.dt.toString() === target.closest("button").id
    //   )
    // );
    const filterDailyWeatherData = dailyWeatherData.filter(
      (ele) => ele.dt.toString() === target.closest("button").id
    )[0];
    setCurrentWeatherData(filterDailyWeatherData);
    setBtnBgUpdate(target.closest("button").id);
    setBackToCurrentShow(true);
    setCurrentWeatherWeekDays((prev) => {
      if(filterDailyWeatherData.dt === dailyWeatherData[0].dt) {
        return 'Today'
      } else if (filterDailyWeatherData.dt === dailyWeatherData[1].dt) {
        return 'Tomorrow';
      } else {
       return dateToDayConverter(filterDailyWeatherData.dt);
      }
    })
    // console.log(target.dataset.dt);
  };

  useEffect(() => {
    if (btnBgUpdate !== undefined) {
      const allWeeklyBtn = document.querySelectorAll(".weekly__btn");
      allWeeklyBtn.forEach((ele) => {
        // ele.classList.remove("weekly__btn--with-bg");
        console.log(ele.id);
      });

      //  console.log(document
      //     .querySelector(`#${btnBgUpdate}`));
      // .classList.add("weekly__btn--with-bg");

      console.log(allWeeklyBtn);
    }
  }, [btnBgUpdate]);

  return (
    <Card className={styles["weekly__forecast--wrapper"]}>
      <CountryImage />
      <WeeklyForecastPre
        dailyWeatherData={dailyWeatherData}
        handleClick={handleClick}
      />
      <SearchButton setSearchFormDisplay={setSearchFormDisplay} />
    </Card>
  );
};

export default WeeklyForecast;
