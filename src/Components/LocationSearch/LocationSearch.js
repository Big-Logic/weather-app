import React from "react";

import Card from "../UI/Card";

import styles from "./LocationSearch.module.css";

const LocationSearch = ({setSearchFormDisplay}) => {
    const handleSearchClose = () => {
        setSearchFormDisplay(false);
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
          <form className={styles["search__component--form"]}>
            <h3>Gentle Weather</h3>
            <label htmlFor="search">
              <input type="text" placeholder="Search Cities" />
            </label>
          </form>
        </Card>
      </div>
    );
}

export default LocationSearch;