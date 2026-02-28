import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import "../../i18n";
import { routes } from "../../Routes/routes";

const Signup = () => {
  const { t } = useTranslation();

  const {
    sendData,
    form: {
      register,
      handleSubmit,
      formState: { errors },
    },
  } = useSignup();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section
        className="relative flex h-screen flex-col items-center justify-center bg-slate-900"
        style={{ backgroundImage: "url('/img/bg1.webp')" }}
      >
        <div className="bg-rich-black/40 absolute top-0 left-0 z-0 h-full w-full"></div>

        {/* Titel */}
        <div className="relative">
          <h1 className="py-5 text-center text-2xl font-bold text-white capitalize md:text-4xl">
            {t("common:signup.title")}
          </h1>
          <p className="text-center font-bold text-white capitalize md:text-2xl">
            {t("common:signup.subtitle")}
          </p>
        </div>

        {/*Form  */}
        <motion.div
          className="bg-rich-black/80 relative z-10 m-auto mx-4 grid max-w-sm items-center rounded-2xl px-8 py-12"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <form action="" onSubmit={handleSubmit(sendData)}>
            {/* USerName */}
            <div>
              <label htmlFor="name" className="text-bold text-lg text-white">
                {t("common:signup.form.name")}
              </label>
              <input
                id="name"
                type="text"
                {...register("username")}
                className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
              />
              <span className="text-red-500">{errors.username?.message}</span>
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="text-bold text-lg text-white">
                {" "}
                {t("common:signup.form.email")}
              </label>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
              />
              <span className="text-red-500">{errors.email?.message}</span>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="text-bold text-lg text-white"
              >
                {t("common:signup.form.password")}
              </label>
              <input
                id="password"
                type="text"
                {...register("password")}
                className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
              />
              <span className="text-red-500">{errors.password?.message}</span>
            </div>

            {/* CONFRIMPASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-bold text-lg text-white"
              >
                {t("common:signup.form.confirmPassword")}
              </label>
              <input
                id="confirmPassword"
                type="text"
                {...register("confirmpass")}
                className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
              />
              <span className="text-red-500">
                {errors.confirmpass?.message}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-shiny-red mx-auto my-4 w-50 cursor-pointer rounded-3xl px-4 py-2 text-white"
              >
                {t("common:signup.form.submit")}
              </button>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-white">
                {t("common:signup.form.loginPrompt")}
              </span>
              <Link
                to={routes.LOGIN}
                className="text-shiny-red cursor-pointer hover:underline"
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
