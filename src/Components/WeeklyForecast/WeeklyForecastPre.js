import React from "react";

import Card from "../UI/Card";

import { getIcon, dateToDayConverter } from "../../helpers/helpers";


import styles from "./WeeklyForecastPre.module.css";

const WeeklyForecastPre = ({dailyWeatherData, handleClick}) => {
    return (
      <>
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
      </>
    );
}

export default WeeklyForecastPre;