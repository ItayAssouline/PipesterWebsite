import CallToAction, {
  ICallToAction,
} from "../../../components/CallToAction/CallToAction";
import Bagles from "../../../assets/images/temp/Bagles.png";
import GirlsEating from "../../../assets/images/temp/GirlsEating.png";
import Machine from "../../../assets/images/temp/Machine.png";

import styles from "./HomeCallToActions.module.css";
import { useEffect } from "react";

export interface CallToActionsProps {
  callToActions: ICallToAction[];
}
export const HomeCallToActions = ({ callToActions }: CallToActionsProps) => {
  return (
    <section className={styles.callToActionsSection}>
      {/* <CallToAction
        backgroundImage={GirlsEating.src}
        title={"Special is everyone"}
        subtitle={"Highlight what makes you, you."}
        isFullWidth
        link={"#"}
      />
      <CallToAction
        backgroundImage={Bagles.src}
        title={"Menu"}
        subtitle={"Highlight what makes you, you."}
        link={"#"}
      />
      <CallToAction
        backgroundImage={Machine.src}
        title={"Shops"}
        subtitle={"Highlight what makes you, you."}
        link={"#"}
      /> */}
      {callToActions.map((cta) => (
        <CallToAction {...cta} key={cta.title} />
      ))}
    </section>
  );
};
