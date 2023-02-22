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
      {callToActions.map((cta) => (
        <CallToAction {...cta} key={cta.title} />
      ))}
    </section>
  );
};
