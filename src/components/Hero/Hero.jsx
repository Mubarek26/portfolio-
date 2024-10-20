import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="newClass"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Mubarek.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I create stunning, simple designs,
            <br />
            and I’m passionate about what I do.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./IMG7.png"
            alt=""
          />
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>FRONT END DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
