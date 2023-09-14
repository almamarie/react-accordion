import React from "react";
import styles from "./Accordion.module.css";
import Question from "./question/Question";

const Accordion = (props) => {
  return (
    <ul className={styles.wrapper}>
      {props.questions.map((question, index) => {
        return <Question key={index} {...question} />;
      })}
    </ul>
  );
};

export default Accordion;
