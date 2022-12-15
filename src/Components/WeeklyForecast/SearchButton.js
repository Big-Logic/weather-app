import React from "react";
import Card from "../UI/Card";

import styles from "./SearchButton.module.css";

const SearchButton = ({setSearchFormDisplay}) => {
    const handleClick = () => {
        setSearchFormDisplay(true);
    }
    return (
        <Card>
            <button className={`${styles['search__location--btn']} btn__unset`} onClick={handleClick}>Search Cities</button>
        </Card>
    )
}

export default SearchButton;