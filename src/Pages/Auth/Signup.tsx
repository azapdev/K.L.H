import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import "../../i18n";
import { routes } from "../../Routes/routes";

const Signup = () => {
  const { t } = useTranslation();

  const { register, SendData, errors, handleSubmit } = useSignup();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section
        className="bg-slate-900 h-screen relative flex justify-center items-center flex-col"
        style={{ backgroundImage: "url('/img/bg1.webp')" }}
      >
        <div className="absolute w-full h-full bg-rich-black/40 top-0 left-0 z-0 "></div>

        {/* Titel */}
        <div className="relative">
          <h1 className="text-center md:text-4xl text-2xl py-5 font-bold text-white capitalize">
            {t("common:signup.title")}
          </h1>
          <p className="text-center md:text-2xl font-bold text-white capitalize">
            {t("common:signup.subtitle")}
          </p>
        </div>

        {/*Form  */}
        <motion.div
          className=" relative max-w-sm bg-rich-black/80 py-12  rounded-2xl m-auto mx-4 px-8 grid items-center z-10"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <form action="" onSubmit={handleSubmit(SendData)}>
            {/* USerName */}
            <div>
              <label htmlFor="name" className="text-white text-bold text-lg">
                {t("common:signup.form.name")}
              </label>
              <input
                id="name"
                type="text"
                {...register("username")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">{errors.username?.message}</span>
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="text-white text-bold text-lg">
                {" "}
                {t("common:signup.form.email")}
              </label>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">{errors.email?.message}</span>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="text-white text-bold text-lg"
              >
                {t("common:signup.form.password")}
              </label>
              <input
                id="password"
                type="text"
                {...register("password")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">{errors.password?.message}</span>
            </div>

            {/* CONFRIMPASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-white text-bold text-lg"
              >
                {t("common:signup.form.confirmPassword")}
              </label>
              <input
                id="confirmPassword"
                type="text"
                {...register("confirmpass")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">
                {errors.confirmpass?.message}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex items-center flex-col">
              <button
                type="submit"
                className="bg-shiny-red text-white px-4 py-2 rounded-3xl cursor-pointer w-50 mx-auto my-4"
              >
                {t("common:signup.form.submit")}
              </button>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-white">
                {t("common:signup.form.loginPrompt")}
              </span>
              <Link
                to={routes.LOGIN}
                className="text-shiny-red hover:underline cursor-pointer"
              >
                {t("common:signup.form.loginLink")}
              </Link>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Signup;
