import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import { getData } from "../../model/model";

import Card from "../UI/Card";
import UserGreeting from "../UserGreeting/UserGreeting";
import DateAndTime from "../DateAndTime/DateAndTime";
import DailyForecast from "../DailyForecast/DailyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import InfoCollection from "../InfoCollection/InfoCollection";
import LocationSearch from "../LocationSearch/LocationSearch";

function App() {
  const [appDisplay, setAppDisplay] = useState(false);
  const [searchFormDisplay, setSearchFormDisplay] = useState(false);
  const [activeUser, setActiveUser] = useState("");
  const [cors, setCors] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [currentWeatherDataStable, setCurrentWeatherDataStable] = useState({});
  const [hourlyWeatherData, setHourlyWeatherData] = useState({});
  const [dailyWeatherData, setDailyWeatherData] = useState({});
  const [timezone, setTimezone] = useState('');
  const [backToCurrentShow, setBackToCurrentShow] = useState(false);
  const [currentWeatherWeekDays, setCurrentWeatherWeekDays] = useState('Current Weather');

  const handleAppDisplay = (lat, lon) => {
    setCors([lat, lon]);
  };

  const updateWeatherData = async (dataFn) => {
    
    const { current, daily, hourly, timezone } = await dataFn(cors);
    // console.log(current, daily[0, 4], hourly, timezone);
      setCurrentWeatherData(current);
      setCurrentWeatherDataStable(current);
      setHourlyWeatherData(hourly.slice(1, 7));
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
                <Card
                  className={`${styles["grid__two--cols"]} ${styles["greeting__date--wrapper"]}`}
                >
                  <UserGreeting activeUser={activeUser} />
                  <DateAndTime />
                </Card>
                <Card className={styles["background__tin"]}>
                  <DailyForecast
                    currentWeatherData={currentWeatherData}
                    setCurrentWeatherData={setCurrentWeatherData}
                    hourlyWeatherData={hourlyWeatherData}
                    timezone={timezone}
                    backToCurrentShow={backToCurrentShow}
                    currentWeatherDataStable={currentWeatherDataStable}
                    setBackToCurrentShow={setBackToCurrentShow}
                    currentWeatherWeekDays={currentWeatherWeekDays}
                    setCurrentWeatherWeekDays={setCurrentWeatherWeekDays}
                  />
                </Card>
              </Card>
              <Card className={styles["background__tin"]}>
                <WeeklyForecast
                  dailyWeatherData={dailyWeatherData}
                  setCurrentWeatherData={setCurrentWeatherData}
                  setBackToCurrentShow={setBackToCurrentShow}
                  setCurrentWeatherWeekDays={setCurrentWeatherWeekDays}
                  setSearchFormDisplay={setSearchFormDisplay}
                />
              </Card>
            </Card>
          </Card>
          {searchFormDisplay && <LocationSearch setSearchFormDisplay={setSearchFormDisplay} />}
        </div>
      )}
    </>
  );
}

export default App;
