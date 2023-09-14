import styles from "./Question.module.css";
import React, { useState } from "react";
import Head from "./Head";
import Body from "./Body";

const Question = (props) => {
  const [showBody, setShowBody] = useState(false);

  const toggleShowBody = () => {
    setShowBody((prev) => !prev);
  };
  return (
    <li className={styles.wrapper}>
      <Head onClick={toggleShowBody} title={props.title} showBody={showBody} />
      {showBody && <Body body={props.body} />}
    </li>
  );
};

export default Question;
