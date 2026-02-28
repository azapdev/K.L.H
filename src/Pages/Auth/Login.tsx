import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routes } from "../../Routes/routes";
import useLogin from "../../hooks/useLogin";
import "../../i18n";

//=============================================================

const Login = () => {
  const { t } = useTranslation();

  const {
    sendData,
    form: {
      register,
      handleSubmit,
      formState: { errors },
    },
  } = useLogin();
  //=============================================================
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <section
        className="relative flex h-[calc(100vh-71.1px)] items-center justify-center md:h-[calc(100vh-89px)]"
        style={{ backgroundImage: "url('/img/bg1.webp')" }}
      >
        <div className="bg-rich-black/40 absolute top-0 left-0 h-full w-full"></div>
        <motion.div
          className="bg-rich-black/80 z-10 m-auto mx-4 grid h-96 max-w-sm items-center rounded-2xl px-8"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <form
            action=""
            onSubmit={handleSubmit(sendData)}
            className="flex flex-col gap-4"
          >
            {/* USERNAME */}
            <div>
              <label htmlFor="email" className="text-xl font-bold text-white">
                {t("common:Login.fields.email.label")}
              </label>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
              />
              <span className="text-xs text-red-500">
                {errors.email?.message}
              </span>
            </div>
            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="text-xl font-bold text-white"
              >
                {t("common:Login.fields.password.label")}
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
                autoComplete="off"
              />
              <span className="text-xs text-red-500">
                {errors.password?.message}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-shiny-red mx-auto my-4 w-50 cursor-pointer rounded-3xl px-4 py-2 text-white"
              >
                {t("common:Login.actions.submitButton")}
              </button>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-white">
                {t("common:Login.actions.footerText")}
              </span>
              <Link
                to={routes.SIGNUP}
                className="text-shiny-red cursor-pointer hover:underline"
              >
                {t("common:Login.actions.linkText")}
              </Link>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Login;
