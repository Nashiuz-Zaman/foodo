//components
import MobileNavigationInnerMenu from "../MobileNavigationInnerMenu/MobileNavigationInnerMenu";
// import BackdropBlur from "../../BackdropBlur/BackdropBlur";

//styles
import styles from "./MobileNavigation.module.css";

//custom hooks
import useBackdropContext from "../../../hooks/useBackdropContext";
import useMobileNavigationContext from "../../../hooks/useMobileNavigationContext";

export default function MobileNavigation({
  navigationOptionsArray = [],
  buttonInfoArray = null,
  textButtonWithImageInfoArray = null,
  socialmediaButtonsHeading = null,
  socialmediaButtonsData = undefined,
  extraClass = undefined,
}) {
  const { closeBackdrop } = useBackdropContext();
  const { mobileNavigationFinalState, handleCloseMobileNavigation } =
    useMobileNavigationContext();

  const closeNavigationAndBackdrop = () => {
    closeBackdrop();
    handleCloseMobileNavigation();
  };

  return (
    <nav
      className={`${styles["mobile-nav"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <div
        className={`${styles["mobile-nav__container"]} ${
          mobileNavigationFinalState.containerOpen
            ? styles["mobile-nav__container--open"]
            : ""
        }`}
      >
        {navigationOptionsArray.map((singleListOfOptions) => {
          return (
            <MobileNavigationInnerMenu
              key={singleListOfOptions.id}
              singleMenuOptions={singleListOfOptions}
              handleCloseClick={closeNavigationAndBackdrop}
              currentMenu={mobileNavigationFinalState.currentMenu}
              previousMenuArray={mobileNavigationFinalState.previousMenu}
              socialmediaButtonsHeading={socialmediaButtonsHeading}
              socialmediaButtonsData={socialmediaButtonsData}
            />
          );
        })}
      </div>
    </nav>
  );
}
