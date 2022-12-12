import React from "react";

import Card from "../UI/Card";
import styles from "./HourlyForecast.module.css";

const HourlyForecast = ({hourlyWeatherData}) => {
    return (
      <Card className={styles["hourly__forecast--wrapper"]}>
        <Card className={styles["hourly__forecast"]}>
          <Card className={styles["hourly__forecast--child"]}>
            <div className={styles["hourly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">3PM</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card className={styles["hourly__forecast--child"]}>
            <p></p>
            <p>31°C</p>
          </Card>
        </Card>
        <Card className={styles["hourly__forecast"]}>
          <Card className={styles["hourly__forecast--child"]}>
            <div className={styles["hourly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">4PM</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card className={styles["hourly__forecast--child"]}>
            <p></p>
            <p>31°C</p>
          </Card>
        </Card>
        <Card className={styles["hourly__forecast"]}>
          <Card className={styles["hourly__forecast--child"]}>
            <div className={styles["hourly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">5PM</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card className={styles["hourly__forecast--child"]}>
            <p></p>
            <p>31°C</p>
          </Card>
        </Card>
        <Card className={styles["hourly__forecast"]}>
          <Card className={styles["hourly__forecast--child"]}>
            <div className={styles["hourly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">6PM</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card className={styles["hourly__forecast--child"]}>
            <p></p>
            <p>31°C</p>
          </Card>
        </Card>
      </Card>
    );
}

export default HourlyForecast;