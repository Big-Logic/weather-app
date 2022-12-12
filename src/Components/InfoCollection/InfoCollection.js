import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import styles from "./InfoCollection.module.css";

const InfoCollection = (props) => {
  const [findLocation, setFindLocation] = useState(false);
  const [userStr, setUserStr] = useState('');
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    props.handleAppDisplay(latitude, longitude);
  }

  function error() {
    alert("Unable to retrieve your location");
  }

  useEffect(() => {
    if (findLocation) {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
  },[findLocation]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFindLocation(true);
    props.setActiveUser(userStr)
  };
  return (
    <div className={styles["info__collection--wrapper"]}>
      <Card className={styles["info__collection"]}>
        <form className={styles["info__collection--form"]} onSubmit={handleSubmit}>
          <h3>Gentle Weather</h3>
          <label htmlFor="Full Name">
            First Name
            <input type="text" placeholder="Enter Your First Name" value={userStr} onChange={({ target })=> setUserStr(target.value)} required/>
          </label>
          <p className={styles['warning__msg']}>
            * Please note that submitting this form will create a popup to allow
            location access. Make sure you click Allow to avoid improper app
            functionalities as it is an essential part of the app behavior!!
          </p>
          <button type="submit" className={styles['submit__button']}>Access Location</button>
        </form>
      </Card>
    </div>
  );
};

export default InfoCollection;
