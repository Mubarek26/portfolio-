import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss"; // Import the CSS module as an object

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`${styles.navbar} ${navActive ? styles.active : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a
        className={`${styles.nav__hamburger} ${navActive ? styles.active : ""}`}
        onClick={toggleNav}
      >
        <span className={styles.nav__hamburger__line}></span>
        <span className={styles.nav__hamburger__line}></span>
        <span className={styles.nav__hamburger__line}></span>
      </a>
      <div
        className={`${styles.navbar__items} ${navActive ? styles.active : ""}`}
      >
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbar__active__content}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className={styles.navbar__content}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbar__active__content}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className={styles.navbar__content}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbar__active__content}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className={styles.navbar__content}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={styles.navbar__active__content}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className={styles.navbar__content}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass={styles.navbar__active__content}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
