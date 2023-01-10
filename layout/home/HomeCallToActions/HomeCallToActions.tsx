import CallToAction from "../../../components/CallToAction/CallToAction";
import Bagles from "../../../assets/images/temp/Bagles.png";
import GirlsEating from "../../../assets/images/temp/GirlsEating.png";
import Machine from "../../../assets/images/temp/Machine.png";

import styles from "./HomeCallToActions.module.css";
export const HomeCallToActions = () => {
  return (
    <section className={styles.callToActionsSection}>
      <div className="row">
        <CallToAction
          backgroundImage={GirlsEating.src}
          title={"Special is everyone"}
          subtitle={"Highlight what makes you, you."}
        />
      </div>
      <div className={styles.row}>
        <CallToAction
          backgroundImage={Bagles.src}
          title={"Menu"}
          subtitle={"Highlight what makes you, you."}
        />
        <CallToAction
          backgroundImage={Machine.src}
          title={"Shops"}
          subtitle={"Highlight what makes you, you."}
        />
      </div>
    </section>
  );
};
