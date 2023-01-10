import { useScroll } from "framer-motion";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { pipesterColors } from "../../theme/colors";
import PipesterIllustration from "../PipesterIllustration/PipesterIllustration";
import PipesterLogo from "../PipesterLogo/PipesterLogo";
import StickyBox from "react-sticky-box";

import styles from "./NavBar.module.css";

interface NavBarProps {
  contentRef?: MutableRefObject<HTMLDivElement | null>;
}

const NavBar = () => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, []);

  return (
    <>
      <div className={styles.navIllustration}>
        <PipesterIllustration
          color={pipesterColors.blue}
          style={{ transform: "scale(1.3)" }}
        />
      </div>
      <StickyBox offsetTop={0} style={{ zIndex: 10 }}>
        <div className={`${styles.navBar}`} ref={navBarRef}>
          <div className={styles.left}>
            <PipesterLogo
              color={pipesterColors.blue}
              style={{
                marginTop: !isAtTop ? 0 : "-20vh",
                width: "50%",
                zIndex: 10,
              }}
            />
          </div>
          <div className={styles.right}>
            <ul className={styles.menu}>
              <li>Menu</li>
              <li>Shops</li>
              <li>About</li>
              <li>Loyalty Program</li>
            </ul>
          </div>
        </div>
      </StickyBox>
    </>
  );
};

export default NavBar;
