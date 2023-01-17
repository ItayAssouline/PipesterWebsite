import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import StickyBox from "react-sticky-box";
import { useWindowDimensions } from "../../hooks";
import { PipesterBrandColor } from "../../types/general.types";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import PipesterIllustration from "../PipesterIllustration/PipesterIllustration";
import PipesterLogo from "../PipesterLogo/PipesterLogo";
import styles from "./NavBar.module.css";

interface NavBarProps {
  color: PipesterBrandColor;
}

const NavBar = ({ color }: NavBarProps) => {
  const { height, width } = useWindowDimensions();

  const navBarRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  const [isNavOpen, setIsNavOpen] = useState(width && width > 768);

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

  const router = useRouter();

  const logoClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.navIllustration}>
        <PipesterIllustration
          color={color}
          style={{ transform: "scale(1.3)" }}
        />
      </div>
      <StickyBox offsetTop={0} style={{ zIndex: 10 }}>
        <div className={`${styles.navBar}`} ref={navBarRef}>
          <div className={styles.left}>
            <PipesterLogo
              onClick={logoClick}
              color={color}
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
              <li>
                <Link href={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link href={"/shops"}>Shops</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/loyalty-program"}>Loyalty Program</Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </StickyBox>
    </>
  );
};

export default NavBar;
