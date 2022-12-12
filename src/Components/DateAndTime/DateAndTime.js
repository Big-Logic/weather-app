import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import styles from "./DateAndTime.module.css";

const DateAndTime = (props) => {
  const setTime = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const year = new Date().getFullYear();

    let dayString = ''

    switch (day) {
      case 0:
        dayString = 'Sunday'
        break;
      case 1:
        dayString = 'Monday'
        break;
      case 2:
        dayString = "Tuesday"
        break;
      case 3:
        dayString = "Wednesday"
        break;
      case 4:
        dayString = "Thursday"
        break;
      case 5:
        dayString = "Friday"
        break;
      case 6:
        dayString = "Saturday"
        break;
    }

    let monthString = '';

    switch (month) {
      case 0:
        monthString = "Jan.";
        break;
      case 1:
        monthString = "Feb.";
        break;
      case 2:
        monthString = "Mar.";
        break;
      case 3:
        monthString = "Apr.";
        break;
      case 4:
        monthString = "May.";
        break;
      case 5:
        monthString = "Jun.";
        break;
      case 6:
        monthString = "Jul.";
        break;
      case 7:
        monthString = "Aug.";
        break;
      case 8:
        monthString = "Sept.";
        break;
      case 9:
        monthString = "Oct.";
        break;
      case 10:
        monthString = "Nov.";
        break;
      case 11:
        monthString = "Dec.";
        break;
    }
    // :${
    //   seconds < 10 ? "0" + seconds : seconds
    // } 
    return {timeStr: `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours < 12 ? "AM" : "PM"}`, dateStr: `${dayString} ${monthString} ${date}, ${year}`};
  };
  const [newTime, setNewTime] = useState(setTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewTime(setTime());
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
