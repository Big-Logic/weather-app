import React from "react";

import Card from "../UI/Card";

import styles from "./WeeklyForecast.module.css";

const WeeklyForecast = () => {
    return (
      <Card className={styles["weekly__forecast--wrapper"]}>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
        <Card className={styles["weekly__forecast"]}>
          <Card className={styles["weekly__forecast--child"]}>
            <div className={styles["weekly__icon--box"]}>
              <i class="las la-cloud"></i>
            </div>
            <div>
              <p className="font__sm color__tint">Monday</p>
              <p>Party Cloudy</p>
            </div>
          </Card>
          <Card>
            <p className="text__align--right">31°C</p>
          </Card>
        </Card>
      </Card>
    );
};

export default WeeklyForecast;