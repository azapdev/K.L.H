import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../i18n";
const Section2 = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <>
      <section
        className="flex flex-col justify-around gap-16 overflow-hidden bg-cover bg-center py-4"
        style={{ backgroundImage: "url('/img/bg2.webp')" }}
      >
        {/* CARDS */}
        <div className="mx-2 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-15">
          {/* card1 */}
          <motion.div
            animate={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-rich-black border-dark-topaz flex max-w-sm flex-col items-center justify-center gap-3 border-b-12 p-8 capitalize"
          >
            <span className="text-dark-topaz text-xl md:text-4xl">
              <i className="fa-solid fa-scale-balanced"></i>
            </span>
            <p className="font-bold whitespace-nowrap text-white md:text-lg">
              {t("common:features.request_consultation")}
            </p>
            <span className="text-center text-sm text-white">
              {t("common:features.request_desc")}
            </span>
          </motion.div>

          {/* card2 */}
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-rich-black border-dark-topaz flex max-w-sm flex-col items-center justify-center gap-3 border-b-12 p-8 capitalize"
          >
            <span className="text-dark-topaz text-4xl">
              <i className="fa-solid fa-gavel"></i>
            </span>
            <p className="md:text-2lg font-bold whitespace-nowrap text-white">
              {t("common:features.book_appointment_card")}
            </p>
            <span className="text-center text-sm text-white">
              {t("common:features.book_desc")}
            </span>
          </motion.div>
        </div>

        {/* info */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 px-4 md:flex-row">
          {/* img */}
          <div className="border-dark-topaz mx-2 rounded-2xl border-9 px-2 py-5 md:px-5 md:py-10">
            <img
              src="img/hummer.webp"
              alt=""
              className={`size-40 rounded-2xl md:h-60 md:w-7xl ${lng == "en" ? "-translate-x-8.5 transform md:-translate-x-22.5" : "translate-x-8.5 transform md:translate-x-22.5"}`}
            />
          </div>

          {/* DESCREPTION */}
          <div className="mx-2">
            <p className="text-rich-black my-4 text-center text-lg font-extrabold md:text-2xl">
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
