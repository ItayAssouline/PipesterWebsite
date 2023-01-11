import { useScroll } from "framer-motion";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { pipesterColors } from "../../theme/colors";
import PipesterIllustration from "../PipesterIllustration/PipesterIllustration";
import PipesterLogo from "../PipesterLogo/PipesterLogo";
import StickyBox from "react-sticky-box";
import MenuIcon from "../../assets/icons/MenuIcon.svg";
import Image from "next/image";
import styles from "./NavBar.module.css";

interface NavBarProps {
  contentRef?: MutableRefObject<HTMLDivElement | null>;
}

const NavBar = () => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  const [isNavOpen, setIsNavOpen] = useState(true);

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
              className={`${styles.logo} ${isAtTop ? styles.atTop : ""}`}
            />
          </div>
          <div className={styles.right}>
            <Image
              className={styles.hamburgerIcon}
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
              src={MenuIcon.src}
              alt={"Hamburger menu icon"}
              width={20}
              height={20}
            />
            <ul className={`${styles.menu} ${isNavOpen ? "" : styles.hidden}`}>
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
