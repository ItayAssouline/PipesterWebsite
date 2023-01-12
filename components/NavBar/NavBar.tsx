import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import { pipesterColors } from "../../theme/colors";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import PipesterIllustration from "../PipesterIllustration/PipesterIllustration";
import PipesterLogo from "../PipesterLogo/PipesterLogo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, [scrollY]);

  const handleClick = () => setIsNavOpen((prev) => !prev);

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
              className={`${styles.logo} ${isAtTop ? styles.atTop : ""}`}
            />
          </div>
          <div className={styles.right}>
            <HamburgerButton onClick={handleClick} isOpen={isNavOpen} />
            <motion.ul
              className={`${styles.menu} ${isNavOpen ? "" : styles.hidden}`}
              initial={{ height: "0" }}
              animate={{ height: isNavOpen ? "auto" : "0" }}
            >
              <li>Menu</li>
              <li>Shops</li>
              <li>About</li>
              <li>Loyalty Program</li>
            </motion.ul>
          </div>
        </div>
      </StickyBox>
    </>
  );
};

export default NavBar;
