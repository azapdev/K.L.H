import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { routes } from "../../Routes/routes";
import type { Nums } from "../../types";

const Section1 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const nums: Nums[] = [
    {
      start: 0,
      end: 1270,
      label: "successful case",
    },
    {
      start: 0,
      end: 1239,
      label: "active lawyer",
    },
    {
      start: 0,
      end: 2235,
      label: "happy customer",
    },
  ];
  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex justify-center items-center overflow-hidden relative"
        style={{ backgroundImage: "url('/img/bg1.jpg')" }}
      >
        <div className="absolute w-full h-full bg-rich-black/40 top-0 left-0 z-0 "></div>

        {/* parent */}
        <div className="flex items-center flex-col content-center gap-10 z-10">
          {/* 1rd section */}
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="text-rich-black bg-dark-topaz capitalize px-4 md:px-8 py-2 rounded-3xl text-center text-md"
          >
            <i className="fa-solid fa-medal me-1"></i>
            <span>the expertis makes the defference </span>
          </motion.div>

          {/* 2rd section */}
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -400, opacity: 0 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="flex justify-center items-center 
          "
          >
            <span className="text-white capitalize text-3xl md:text-5xl wrap-normal text-center leading-tight font-bold">
              the frist platform for leagel consultations
            </span>
          </motion.div>

          {/* 3rd section */}
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 400 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="flex flex-col items-center gap-10 "
          >
            {/* Button */}
            <div>
              <Link
                to={routes.ABOUT}
                className="bg-shiny-red text-white md:p-5 p-4 font-bold capitalize rounded-2xl cursor-pointer md:text-lg"
              >
                about K.L.H(K.L.H)
              </Link>
            </div>
            <p className="text-dark-topaz capitalize font-bold md:text-lg">
              he did not disappoint ... who consulted
            </p>

            {/* section for nums */}
            <div className="flex gap-4 items-center justify-between mx-4 md:flex-row flex-col">
              {nums.map(({ start, end, label }, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="flex items-center flex-col">
                      <span
                        ref={ref}
                        className="text-dark-topaz md:text-2xl text-lg font-bold"
                      >
                        {inView && (
                          <CountUp
                            start={start}
                            end={end}
                            duration={2}
                            className="text-white me-1"
                          />
                        )}
                        +
                      </span>
                      <p className="text-dark-topaz capitalize text-sm md:lg">
                        {label}
                      </p>
                    </div>
                    {index !== nums.length - 1 && (
                      <div className="md:border md:border-dashed md:border-dark-topaz md:h-10 md:mx-4"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Section1;
