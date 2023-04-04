//styles
import styles from "./Home.module.css";

//Home starts here
export default function Home({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles["home-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    ></div>
  );
}
