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
        className="flex justify-center overflow-hidden bg-black/60 bg-cover bg-center py-10"
        style={{ backgroundImage: "url('/img/bg3.webp')" }}
      >
        {/* PARENT */}
        <div>
          {/* TITEL */}
          <div className="my-5 flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-white">
              {t("common:services.title")}
            </h2>
            <p className="my-4 max-w-4xl px-5 text-center text-white">
              {t("common:services.subtitle")}
            </p>
          </div>

          {/* CARDS */}
          <motion.div
            className="grid items-center justify-center gap-6 py-10 md:grid-cols-3"
            animate={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            {cards.map(({ icon, title, content }, index) => (
              <div
                key={index}
                className="hover:bg-dark-topaz group m-4 flex max-w-sm flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-150"
              >
                <span className="bg-dark-topaz group-hover:text-dark-topaz rounded-lg p-2 text-2xl text-white duration-150 group-hover:bg-white">
                  <i className={`${icon}`}></i>
                </span>
                <h2 className="line-clamp-1 text-center text-lg font-bold text-white duration-150 group-hover:text-black">
                  {title}
                </h2>
                <p className="line-clamp-3 text-center text-sm text-white duration-150 group-hover:text-black">
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
                className="border-shiny-red bg-shiny-red hover:text-shiny-red mt-4 cursor-pointer px-6 py-5 font-bold text-white transition-colors duration-300 hover:bg-transparent"
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
