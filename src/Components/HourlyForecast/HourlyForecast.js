import React from "react";
import { dateToDayConverter, dateToHourConverter } from "../../helpers/helpers";

import { getIcon } from "../../helpers/helpers";

import Card from "../UI/Card";
import styles from "./HourlyForecast.module.css";

const HourlyForecast = ({hourlyWeatherData}) => {
    return (
      <Card className={styles["hourly__forecast--wrapper"]}>
            {hourlyWeatherData.map(ele => {
                  return (
                    <Card className={styles["hourly__forecast"]} >
                      <p className="font__sm color__tint">{`${dateToDayConverter(ele.dt).slice(0, 3)} ${dateToHourConverter(ele.dt)}`}</p>
                      <img src={getIcon(ele.weather[0].icon, 2)} alt="icon" className="img__sm" />
                      <p>{ele.weather[0].description}</p>
                      <p>{ele.temp < 0 ? '0' : Math.round(ele.temp)}°C</p>
                    </Card>
                  );
            })}
      </Card>
    );
}

export default HourlyForecast;