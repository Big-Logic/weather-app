import React from "react";

import styles from "./CountryImage.module.css";

import uk from "./uk.jpg";

const CountryImage = () => {
    return (
      <div className={styles["country__image--wrapper"]}>
        <img src={uk} alt="Country" />
      </div>
    );
}

export default CountryImage;