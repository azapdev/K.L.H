import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routes } from "../../Routes/routes";
import { Button } from "../../components/ui/button";
import "../../i18n";
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-slate-900 md:h-[calc(100vh-89px)]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-6"
        >
          <motion.img src="/img/logo.svg" alt="Logo" className="size-40" />
          <p className="text-center text-2xl font-bold text-white">
            {t("common:About.title")}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Link to={routes.HOME}>
            <Button
              variant="outline"
              className="border-shiny-red bg-shiny-red hover:text-shiny-red hover:border-shiny-red mt-4 cursor-pointer px-6 py-5 text-lg font-bold text-white transition-colors duration-300 hover:bg-transparent"
            >
              {t("common:About.button")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default About;
