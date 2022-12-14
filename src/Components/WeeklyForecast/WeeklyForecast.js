import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import { getIcon, dateToDayConverter } from "../../helpers/helpers";

import styles from "./WeeklyForecast.module.css";

import uk from "./uk.jpg";

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
      <div className={styles["country__image--wrapper"]}>
        <img src={uk} alt="Country" />
      </div>
      {dailyWeatherData.map((ele, i) => {
        return (
          <button
            onClick={handleClick}
            className="btn__unset weekly__btn"
            id={ele.dt}
          >
            <Card className={styles["weekly__forecast"]}>
              <Card className={styles["weekly__forecast--child"]}>
                <div className={styles["weekly__icon--box"]}>
                  <img src={getIcon(ele.weather[0].icon, "2")} />
                </div>
                <div>
                  <p className="font__sm color__tint">
                    {i === 0
                      ? "Today"
                      : i === 1
                      ? "Tomorrow"
                      : dateToDayConverter(ele.dt)}
                  </p>
                  <p>{ele.weather[0].description}</p>
                </div>
              </Card>
              <Card>
                <p className="text__align--right">
                  {ele.temp.day < 1 ? "0" : Math.round(ele.temp.day)}°C
                </p>
              </Card>
            </Card>
          </button>
        );
      })}
    </Card>
  );
};

export default WeeklyForecast;
