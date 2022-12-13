import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import { getData } from "../../model/model";

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
  const [timezone, setTimezone] = useState('');

  const handleAppDisplay = (lat, lon) => {
    setCors([lat, lon]);
  };

  const updateWeatherData = async (dataFn) => {
    
    const { current, daily, hourly, timezone } = await dataFn(cors);
    // console.log(current, daily[0, 4], hourly, timezone);
      setCurrentWeatherData(current);
      setHourlyWeatherData(hourly.slice(1, 8));
      setDailyWeatherData(daily.slice(0, 5));
      setTimezone(timezone);
      setAppDisplay(true);
  }

  

  useEffect(() => {
    if(cors) {
    updateWeatherData(getData);
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
                <Card className={`${styles["grid__two--cols"]} ${styles['greeting__date--wrapper']}`}>
                  <UserGreeting activeUser={activeUser} />
                  <DateAndTime />
                </Card>
                <Card className={styles["background__tin"]}>
                  <DailyForecast currentWeatherData={currentWeatherData} hourlyWeatherData={hourlyWeatherData} timezone={timezone} />
                </Card>
              </Card>
              <Card className={styles["background__tin"]}>
                <WeeklyForecast dailyWeatherData={dailyWeatherData} setCurrentWeatherData={setCurrentWeatherData} />
              </Card>
            </Card>
          </Card>
        </div>
      )}
    </>
  );
}

export default App;
