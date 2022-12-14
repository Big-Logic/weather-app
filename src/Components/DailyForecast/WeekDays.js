import React from "react";

import Card from "../UI/Card";

import { dateToDayConverter } from "../../helpers/helpers";

import styles from "./WeekDays.module.css"

const WeekDays = ({weekDay}) => {
    return (
      <Card className={styles["day__wrapper"]}>
        <p>{dateToDayConverter(weekDay)}</p>
      </Card>
    );
}

export default WeekDays;