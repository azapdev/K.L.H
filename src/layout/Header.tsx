import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../Routes/routes";
import { AuthContext } from "../hooks/Context";
import "../i18n";

const Header = () => {
  // =========================================================================
  // TRansilation

  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const NavLinkes = [
    {
      path: routes.HOME,
      label: t("common:nav.home"),
    },
    {
      path: routes.ABOUT,
      label: t("common:nav.about"),
    },
  ];

  const [toggle, setToggle] = useState(false);
  // =========================================================================
  // handel logout
  const authcontext = useContext(AuthContext);
  const token = authcontext?.token;
  const handleLogout = () => {
    localStorage.removeItem("token");
    authcontext?.Logout();
  };

  return (
    <>
      <header className="bg-rich-black sticky top-0 z-30 flex justify-center border-b-2 border-b-black duration-300">
        <div className="container flex items-center justify-center gap-5 py-3 md:justify-around">
          {/* img */}
          <div className="hidden object-cover md:block">
            <img src="img/logo.svg" alt="" loading="lazy" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex flex-row justify-center gap-5 px-8">
              {NavLinkes.map(({ path, label }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `hover:text-dark-topaz mx-2 py-2 text-center text-sm transition-colors duration-150 ${
                      isActive
                        ? "text-dark-topaz border-dark-topaz border-b-2 font-bold"
                        : "text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Mobile Nav */}
          <AnimatePresence>
            {toggle && (
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="bg-rich-black fixed top-0 right-0 z-10 flex h-screen w-64 justify-center md:hidden"
              >
                <ul className="flex flex-col justify-center gap-5 px-8 pt-20">
                  {NavLinkes.map(({ path, label }, index) => (
                    <NavLink
                      key={index}
                      to={path}
                      className={({ isActive }) =>
                        `hover:text-dark-topaz px-6 py-2 text-center text-sm transition-colors duration-150 ${
                          isActive
                            ? "text-dark-topaz border-dark-topaz border-b-2 font-bold"
                            : "text-white"
                        }`
                      }
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      {label}
                    </NavLink>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>

          {/* btns to login */}

          <div className="mx-4 flex w-screen items-center justify-between md:w-fit md:gap-2">
            {token ? (
              <div>
                <button
                  onClick={handleLogout}
                  className="bg-dark-topaz border-dark-topaz transition-al inline-block cursor-pointer rounded-2xl border-2 px-2 py-3 text-sm font-bold text-white duration-150 hover:scale-105 md:px-8 md:text-lg"
                >
                  {t("common:nav.logout")}
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to={routes.SIGNUP}
                  className="text-dark-topaz border-dark-topaz hover:bg-dark-topaz inline-block rounded-2xl border-2 px-2 py-3 text-xs whitespace-nowrap transition-all duration-150 hover:scale-105 hover:text-white md:px-8 md:text-lg"
                >
                  {t("common:nav.book_appointment")}
                </Link>
                <Link
                  to={routes.LOGIN}
                  className="bg-dark-topaz border-dark-topaz transition-al inline-block rounded-2xl border-2 px-2 py-3 text-sm font-bold text-white duration-150 hover:scale-105 md:px-8 md:text-lg"
                >
                  {t("common:nav.login")}
                </Link>
              </div>
            )}
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer duration-150 hover:scale-105"
                onClick={() => i18n.changeLanguage(lng == "en" ? "ar" : "en")}
              >
                <i className="fa-solid fa-earth-americas bg-dark-topaz rounded-xl px-2 py-2 text-white md:text-3xl"></i>
              </button>
              {/* toggel */}
              <button
                className={`z-20 flex transform cursor-pointer flex-col gap-1 transition-transform duration-300 md:hidden ${toggle ? "-translate-x-45" : "translate-0"}`}
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              >
                <span className="bg-dark-topaz h-1 w-5 rounded-2xl md:w-10"></span>
                <span className="bg-dark-topaz h-1 w-5 rounded-2xl md:w-10"></span>
                <span className="bg-dark-topaz h-1 w-5 rounded-2xl md:w-10"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Blurpage */}
      <div
        className={`${
          toggle ? "fixed inset-0 z-20 backdrop-blur-3xl" : "hidden"
        }`}
        onClick={() => setToggle(false)}
      ></div>
    </>
  );
};

export default Header;
