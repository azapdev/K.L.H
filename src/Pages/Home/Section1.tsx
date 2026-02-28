import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "../../i18n";
import { routes } from "../../Routes/routes";
import type { Nums } from "../../types";

const Section1 = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const nums: Nums[] = [
    {
      start: 0,
      end: 1270,
      label: t("common:Sec1.stats.successful_cases"),
    },
    {
      start: 0,
      end: 1239,
      label: t("common:Sec1.stats.active_lawyers"),
    },
    {
      start: 0,
      end: 2235,
      label: t("common:Sec1.stats.happy_customers"),
    },
  ];
  return (
    <>
      <section
        className="relative flex h-screen items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg1.webp')" }}
      >
        <div className="bg-rich-black/40 absolute top-0 left-0 z-0 h-full w-full"></div>

        {/* parent */}
        <div className="z-10 flex flex-col content-center items-center gap-10">
          {/* 1rd section */}
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="text-rich-black bg-dark-topaz text-md rounded-3xl px-4 py-2 text-center capitalize md:px-8"
          >
            <i className="fa-solid fa-medal me-1"></i>
            <span>{t("common:Sec1.badge")}</span>
          </motion.div>

          {/* 2rd section */}
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -400, opacity: 0 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <span className="mx-2 line-clamp-2 text-center text-2xl leading-tight font-bold wrap-normal text-white capitalize md:text-5xl">
              {t("common:Sec1.title")}
            </span>
          </motion.div>

          {/* 3rd section */}
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 400 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="flex flex-col items-center gap-10"
          >
            {/* Button */}
            <div>
              <Link
                to={routes.ABOUT}
                className="bg-shiny-red cursor-pointer rounded-2xl p-4 font-bold text-white capitalize md:p-5 md:text-lg"
              >
                {t("common:Sec1.cta_button")}
              </Link>
            </div>
            <p className="text-dark-topaz mx-2 text-center font-bold capitalize md:text-lg">
              {t("common:Sec1.testimonial")}
            </p>

            {/* section for nums */}
            <div className="mx-4 flex flex-col items-center justify-between gap-4 md:flex-row">
              {nums.map(({ start, end, label }, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <span
                        ref={ref}
                        className="text-dark-topaz text-lg font-bold md:text-2xl"
                      >
                        {inView && (
                          <CountUp
                            start={start}
                            end={end}
                            duration={2}
                            className="me-1 text-white"
                          />
                        )}
                        +
                      </span>
                      <p className="text-dark-topaz md:lg text-sm capitalize">
                        {label}
                      </p>
                    </div>
                    {index !== nums.length - 1 && (
                      <div className="md:border-dark-topaz md:mx-4 md:h-10 md:border md:border-dashed"></div>
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
