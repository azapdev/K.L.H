import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../i18n";
const Section2 = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <>
      <section
        className=" bg-cover bg-center py-4 flex flex-col justify-around gap-16 overflow-hidden"
        style={{ backgroundImage: "url('/img/bg2.webp')" }}
      >
        {/* CARDS */}
        <div className="flex justify-center flex-col items-center md:flex-row gap-6 md:gap-15 mx-2">
          {/* card1 */}
          <motion.div
            animate={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-rich-black flex flex-col justify-center items-center gap-3 max-w-sm capitalize p-8 border-b-12 border-dark-topaz"
          >
            <span className="text-dark-topaz text-xl md:text-4xl">
              <i className="fa-solid fa-scale-balanced"></i>
            </span>
            <p className="text-white font-bold md:text-lg whitespace-nowrap">
              {t("common:features.request_consultation")}
            </p>
            <span className="text-white text-center text-sm">
              {t("common:features.request_desc")}
            </span>
          </motion.div>

          {/* card2 */}
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-rich-black flex flex-col justify-center items-center gap-3 max-w-sm capitalize  p-8 border-b-12 border-dark-topaz"
          >
            <span className="text-dark-topaz text-4xl">
              <i className="fa-solid fa-gavel"></i>
            </span>
            <p className="text-white font-bold md:text-2lg whitespace-nowrap">
              {t("common:features.book_appointment_card")}
            </p>
            <span className="text-white text-center text-sm">
              {t("common:features.book_desc")}
            </span>
          </motion.div>
        </div>

        {/* info */}
        <div className="flex max-w-5xl flex-col md:flex-row items-center justify-center px-4 mx-auto gap-10 ">
          {/* img */}
          <div className="md:py-10 py-5 md:px-5 px-2 border-9 border-dark-topaz rounded-2xl mx-2">
            <img
              src="img/hummer.webp"
              alt=""
              className={`md:w-7xl  md:h-60 size-40 rounded-2xl ${lng == "en" ? "transform md:-translate-x-22.5 -translate-x-8.5 " : "transform md:translate-x-22.5 translate-x-8.5 "}`}
            />
          </div>

          {/* DESCREPTION */}
          <div className="mx-2">
            <p className="font-extrabold text-rich-black md:text-2xl text-lg my-4 text-center">
              {t("common:about_section.title")}
            </p>
            <span>{t("common:about_section.description")}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
