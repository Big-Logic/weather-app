import React, { useEffect, useState } from "react";

import Form from "./Form";

import isAlpha from "validator/lib/isAlpha";


const InfoCollection = ({handleAppDisplay, setActiveUser}) => {
  const [findLocation, setFindLocation] = useState(false);
  const [userStr, setUserStr] = useState("");
  const [displayErrorComponent, setDisplayErrorComponent] = useState(false);
  const [inputValidator, setInputValidator] = useState(true);
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    handleAppDisplay(latitude, longitude);
  }

  function error() {
    setDisplayErrorComponent(true);
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
    if (isAlpha(userStr))  {
      setInputValidator(true);
      setFindLocation(true);
      setActiveUser(userStr);
    }  else {
      setInputValidator(false);
    }
    console.log(isAlpha(userStr));
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      userStr={userStr}
      setUserStr={setUserStr}
      displayErrorComponent={displayErrorComponent}
      handleAppDisplay={handleAppDisplay}
      inputValidator={inputValidator}
    />
  );
};

export default InfoCollection;
