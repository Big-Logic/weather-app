import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import { getFullReadableDate } from "../../helpers/helpers";

import styles from "./DateAndTime.module.css";

const DateAndTime = () => {
  
  const [newTime, setNewTime] = useState(getFullReadableDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewTime(getFullReadableDate());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <Card className={styles["dateTime__wrapper"]}>
      <h3>{newTime.timeStr}</h3>
      <p className="font__sm color__tint">{newTime.dateStr}</p>
    </Card>
  );
};

export default DateAndTime;
