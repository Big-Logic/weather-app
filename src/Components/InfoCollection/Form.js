import React from "react";

import Card from "../UI/Card";

import styles from './Form.module.css';

const Form = ({handleSubmit, userStr, setUserStr, displayErrorComponent}) => {
    return (
      <div className={styles["info__collection--wrapper"]}>
        <Card className={styles["info__collection"]}>
          {displayErrorComponent ? (
            <div>
              <p>There was an error getting your location</p>
            </div>
          ) : (
            <form
              className={styles["info__collection--form"]}
              onSubmit={handleSubmit}
            >
              <h3>Gentle Weather</h3>
              <label htmlFor="Full Name">
                First Name
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  value={userStr}
                  onChange={({ target }) => setUserStr(target.value)}
                  required
                />
              </label>
              <p className={styles["warning__msg"]}>
                * Please note that submitting this form will create a popup to
                allow location access. Make sure you click Allow to avoid
                improper app functionalities as it is an essential part of the
                app behavior!!
              </p>
              <button type="submit" className={styles["submit__button"]}>
                Access Location
              </button>
            </form>
          )}
        </Card>
      </div>
    );
}

export default Form;