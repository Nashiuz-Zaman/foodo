//styles
import styles from "./Component.module.css";

//component starts here
export default function Component({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles["component-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    ></div>
  );
}
