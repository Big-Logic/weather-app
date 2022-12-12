import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

import styles from "./UserGreeting.module.css";

const UserGreeting = ({ activeUser }) => {
  const [greetOption, setGreetOption] = useState();
  const handleGreet = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
        setGreetOption('Good morning');
    } else {
        setGreetOption('Good afternoon');
    }
  }

  useEffect(()=> {
    let greetIntercal = setInterval(()=> {
        handleGreet()
    }, 1000);

    return () => {
        clearInterval(greetIntercal)
    }
  }, []);
    return (
        <Card>
            <h3>{greetOption} {activeUser}</h3>
            <p className="font__sm color__tint">Have a nice day.</p>
        </Card>
    );
}

export default UserGreeting;