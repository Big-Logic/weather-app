import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import Card from "../UI/Card";
import UserGreeting from "../UserGreeting/UserGreeting";
import DateAndTime from "../DateAndTime/DateAndTime";
import DailyForecast from "../DailyForecast/DailyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import InfoCollection from "../InfoCollection/InfoCollection";

function App() {
  const [appDisplay, setAppDisplay] = useState(false);
  const [activeUser, setActiveUser] = useState("");
  const [cors, setCors] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [hourlyWeatherData, setHourlyWeatherData] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState({});

  const handleAppDisplay = (lat, lon) => {
    setAppDisplay(true);
    setCors([lat, lon]);
  };

  const getData = async () => {
    try {
    const response = await fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat=6.3156068&lon=-10.8073698&appid=9bd8c8df77c6408b5eb4858991ede650"
    );
    if(response.ok) {
     const data = await response.json();
     setCurrentWeatherData(data.current);
     setHourlyWeatherData(data.hourly);
     setDailyWeatherData(data.daily);
     console.log(data);
    }
      } catch (err) {
        console.log(err.message);
      }

  };

  useEffect(() => {
    if(cors) {
      // getData();
    }
  }, [cors]);
  return (
    <>
      {!appDisplay ? (
        <InfoCollection
          setActiveUser={setActiveUser}
          handleAppDisplay={handleAppDisplay}
        />
      ) : (
        <div className={styles["app__wrapper"]}>
          <Card className={styles.app}>
            <Card className={styles["grid__two--cols-6040"]}>
              <Card>
                <Card className={styles["grid__two--cols"]}>
                  <UserGreeting activeUser={activeUser} />
                  <DateAndTime />
                </Card>
                <Card className={styles["background__tin"]}>
                  <DailyForecast />
                </Card>
              </Card>
              <Card className={styles["background__tin"]}>
                <WeeklyForecast />
              </Card>
            </Card>
          </Card>
        </div>
      )}
    </>
  );
}

export default App;
