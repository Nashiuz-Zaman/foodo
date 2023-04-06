//react
import React from "react";

//styles
import styles from "./PlainDescription.module.css";

function PlainDescription({ description = "", extraClass = undefined }, ref) {
  return (
    <div
      ref={ref}
      className={`${styles["plain-description-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <p className={styles["plain-description-main__description"]}>
        {description}
      </p>
    </div>
  );
}

export default React.forwardRef(PlainDescription);
