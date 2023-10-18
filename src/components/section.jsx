import React from "react";
import {motion} from "framer-motion"

const section = ({
  h3,
  p,
  hasbtn = true,
  btntxt,
  imgsrc,
  imgsize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnbgcolor,
  btncolor,
}) => {

  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    },
  };
  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };
  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };
  
  return (
    <>
      <section
        className="section"
        style={{
          backgroundColor,
        }}
      >
        <div>
          <motion.h3
            style={{
              color: headingColor,
            }}
            data-cursorpointer={true}
            {...headingOptions}
          >
            {h3}
          </motion.h3>

          <motion.p style={{ color: textColor }} data-cursorpointer={true} {...textOptions} >{p}</motion.p>

          {hasbtn && (
            <motion.button
              style={{
                color: btncolor,
                backgroundColor: btnbgcolor,
              }}
              data-cursorpointer={true}
              {...buttonOptions}
            >
              {btntxt}
            </motion.button>
          )}

          <motion.div>
            <img src={imgsrc} alt="ImgSrc" style={{ width: imgsize }} {...imgOptions} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default section;
