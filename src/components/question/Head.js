import React from "react";
import styles from "./Head.module.css";
const Head = (props) => {
  const clickHandler = () => {
    props.onClick();
  };

  const icons = (show) => {
    if (show)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
          onClick={clickHandler}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      );

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={styles.icon}
        onClick={clickHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    );
  };

  return (
    <div className={styles.wrapper}>
      <span>{props.title}</span>
      <div className={styles["icon-wrapper"]}> {icons(props.showBody)}</div>
    </div>
  );
};

export default Head;
