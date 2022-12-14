import React, { useEffect, useState } from "react";

import Form from "./Form";


const InfoCollection = (props) => {
  const [findLocation, setFindLocation] = useState(false);
  const [userStr, setUserStr] = useState("");
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
  }, [findLocation]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFindLocation(true);
    props.setActiveUser(userStr);
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      userStr={userStr}
      setUserStr={setUserStr}
    />
  );
};

export default InfoCollection;
