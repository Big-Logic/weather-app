import React from "react";

import Card from "../UI/Card";

import styles from "./MainIconBox.module.css";

import { getIcon } from "../../helpers/helpers";

const MainIconBox = ({iconSrc}) => {
    return (
      <Card className={styles["df__main--icon-wrapper"]}>
        <img
          src={getIcon(iconSrc, "4")}
          alt="Icon"
          className={styles["df__main--icon"]}
        />
      </Card>
    );
}

export default MainIconBox;