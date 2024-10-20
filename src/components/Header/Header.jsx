import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // Handle click outside of sidebar on mobile and tablet
  useOutsideAlerter({ menuRef, setMenuOpened });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>
          <span className={css.myname}> Mu</span>barek
        </div>

        <ul
          className={`flexCenter ${css.menu} ${menuOpened ? css.open : ""}`} // Add open class conditionally
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          aria-hidden={!menuOpened} // Accessibility: indicate whether the menu is open
        >
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>

          <li>
            <button className={css["contact-btn"]}>
              <a href="#Contact" className={css["contact-link"]}>
                Contact Me
              </a>
            </button>
          </li>
        </ul>

        {/* For medium and small screens (including tablets) */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)} // Toggle menuOpened state
          aria-expanded={menuOpened} // Accessibility
          aria-label="Toggle menu" // Accessibility
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
