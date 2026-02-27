import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import "../../i18n";
import { routes } from "../../Routes/routes";
import type { Service } from "../../types";
const Section3 = () => {
  const { t } = useTranslation();
  const cards: Service[] = [
    {
      icon: "fa-solid fa-scale-balanced",
      title: t("common:services.list.arbitration"),
      content: t("common:services.list.subarbitration"),
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: t("common:services.list.consultations"),
      content: t("common:services.list.subconsultations"),
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: t("common:services.list.documents"),
      content: t("common:services.list.subdocuments"),
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: t("common:services.list.admin_systems"),
      content: t("common:services.list.subadmin_systems"),
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: t("common:services.list.litigation"),
      content: t("common:services.list.sublitigation"),
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: t("common:services.list.real_estate"),
      content: t("common:services.list.subreal_estate"),
    },
  ];
  return (
    <>
      <section
        className=" bg-cover bg-center  py-10 bg-black/60 flex justify-center overflow-hidden"
        style={{ backgroundImage: "url('/img/bg3.jpg')" }}
      >
        {/* PARENT */}
        <div>
          {/* TITEL */}
          <div className="flex justify-center flex-col items-center my-5">
            <h2 className="font-bold text-white text-3xl text-center ">
              {t("common:services.title")}
            </h2>
            <p className="text-white text-center max-w-4xl px-5 my-4 ">
              {t("common:services.subtitle")}
            </p>
          </div>

          {/* CARDS */}
          <motion.div
            className="grid md:grid-cols-3 items-center justify-center gap-6 py-10"
            animate={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            {cards.map(({ icon, title, content }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 flex-col rounded-2xl transition-all duration-150 max-w-sm p-5 m-4 hover:bg-dark-topaz group"
              >
                <span className="bg-dark-topaz p-2 text-white text-2xl rounded-lg group-hover:bg-white group-hover:text-dark-topaz duration-150">
                  <i className={`${icon}`}></i>
                </span>
                <h2 className="text-white font-bold text-lg text-center group-hover:text-black duration-150 line-clamp-1">
                  {title}
                </h2>
                <p className="text-white text-center text-sm group-hover:text-black duration-150 line-clamp-3">
                  {content}
                </p>
              </div>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="flex justify-center"
          >
            <Link to={routes.ABOUT}>
              <Button
                variant="outline"
                className="mt-4 font-bold  px-6 py-5 border-shiny-red bg-shiny-red text-white hover:text-shiny-red hover:bg-transparent transition-colors duration-300 cursor-pointer"
              >
                {t("common:services.cta")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Section3;
