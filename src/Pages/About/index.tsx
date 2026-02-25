import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { routes } from "../../Routes/routes";
import { Button } from "../../components/ui/button";
const About = () => {
  return (
    <>
      <div className="w-full md:h-[calc(100vh-89px)] h-screen flex items-center justify-center bg-slate-900 flex-col gap-8 overflow-hidden">
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
          <p className="text-white text-2xl text-center font-bold">
            Wating....
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
              className="mt-4 font-bold text-lg px-6 py-5 border-shiny-red bg-shiny-red text-white hover:bg-transparent hover:text-shiny-red hover:border-shiny-red transition-colors duration-300 cursor-pointer"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default About;
