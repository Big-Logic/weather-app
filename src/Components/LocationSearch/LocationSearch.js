import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import styles from "./LocationSearch.module.css";

import { getCities } from "../../model/model";

const LocationSearch = ({setSearchFormDisplay}) => {
  const [inputValue, setInputValue] = useState('');
  const [locationToSearch, setLocationToSearch] = useState('');
  const [controlResultDisplay, setControlResultDisplay] = useState('');
  const [loadedData, setLoadedData] = useState([]);
    const handleSearchClose = () => {
        setSearchFormDisplay(false);
    }

    const handleChange = ({target}) => {
      setInputValue(target.value);
      console.log(target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setLocationToSearch(inputValue);
    }

    const getData = async (func) => {
        setInputValue('');
        setLocationToSearch('');
        setControlResultDisplay("searching");
        try {
        const data = await func(locationToSearch);
        console.log(data);
        setLoadedData(data)
        setControlResultDisplay("completed");
        } catch (err) {
          console.log(err.message);
        }
    }

    useEffect(()=> {
      if(locationToSearch) {
        getData(getCities);
      }
    }, [locationToSearch])

    const resultDisplayFunc = () => {
      if(!controlResultDisplay) {
        return <p>Nothing yet to show. Type a city name to search.</p>
      } else if (controlResultDisplay === 'searching') {
        return <p>Loading....</p>
      } else if(controlResultDisplay === 'completed') {
        return (
          <div className={styles['locations__wrapper']}>
              {loadedData.map(ele=> {
                return (
                  <button className={`${styles['location__btn']} btn__unset`}>{`${ele.name}, ${ele.country}`}</button>
                )
              })}
          </div>
        )
      }
    }

    return (
      <div className={styles["search__component--wrapper"]}>
        <Card className={styles["search__component"]}>
          <button
            className={`${styles["search__component--close-btn"]} btn__unset`}
            onClick={handleSearchClose}
          >
            <i class="las la-times"></i>
          </button>
          <form
            className={styles["search__component--form"]}
            onSubmit={handleSubmit}
          >
            <h3>Gentle Weather</h3>
            <div className={styles["search__form--wrapper"]}>
              <div>
                <label htmlFor="search">
                  <input
                    type="text"
                    placeholder="Search Cities"
                    value={inputValue}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <button className={styles["search__form--btn"]}>
                  <i class="las la-search"></i>
                </button>
              </div>
            </div>
          </form>
          <Card>
            {resultDisplayFunc()}
          </Card>
        </Card>
      </div>
    );
}

export default LocationSearch;