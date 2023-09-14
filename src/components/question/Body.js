import React from "react";
import styles from "./Body.module.css";

const Body = (props) => {
  return <p className={styles.body}>{props.body}</p>;
};

export default Body;
