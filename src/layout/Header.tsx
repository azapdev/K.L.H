import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../Routes/routes";
import { AuthContext } from "../hooks/Context";
{
  /* <AnimatePresence>
  {toggle && (
    <motion.div
      className="fixed inset-0 backdrop-blur-3xl z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setToogle(false)}
    />
  )}
</AnimatePresence> */
}

const Header = () => {
  const NavLinkes = [
    {
      path: routes.HOME,
      label: "HOME",
    },
    {
      path: routes.ABOUT,
      label: "ABOUT",
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
      <header className="sticky top-0 z-30 flex justify-center bg-rich-black duration-300 border-b-black border-b-2">
        <div className="flex md:justify-around justify-center items-center gap-5 container py-3">
          {/* img */}
          <div className="object-cover hidden md:block">
            <img src="img/logo.svg" alt="" loading="lazy" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex flex-row gap-5 justify-center px-8">
              {NavLinkes.map(({ path, label }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `mx-2 hover:text-dark-topaz text-center duration-150 transition-colors py-2 text-sm ${
                      isActive
                        ? "text-dark-topaz font-bold border-dark-topaz border-b-2"
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
                className="fixed md:hidden right-0 top-0 h-screen w-64 bg-rich-black z-10 flex justify-center "
              >
                <ul className="flex flex-col justify-center gap-5 px-8 pt-20">
                  {NavLinkes.map(({ path, label }, index) => (
                    <NavLink
                      key={index}
                      to={path}
                      className={({ isActive }) =>
                        `hover:text-dark-topaz text-center duration-150 transition-colors px-6 py-2 text-sm ${
                          isActive
                            ? "text-dark-topaz font-bold border-dark-topaz border-b-2"
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

          <div className="flex md:gap-2 justify-between mx-4 items-center w-screen md:w-fit">
            {token ? (
              <div>
                <button
                  onClick={handleLogout}
                  className="inline-block cursor-pointer text-white md:text-lg text-sm font-bold bg-dark-topaz border-2 border-dark-topaz md:px-8 px-2 py-3 rounded-2xl duration-150 transition-al hover:scale-105"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to={routes.SIGNUP}
                  className=" inline-block text-dark-topaz md:text-lg text-sm border-2  border-dark-topaz md:px-8 px-2 py-3 whitespace-nowrap rounded-2xl duration-150 transition-all hover:bg-dark-topaz hover:text-white hover:scale-105"
                >
                  Book Appointment
                </Link>
                <Link
                  to={routes.LOGIN}
                  className="inline-block text-white md:text-lg text-sm font-bold bg-dark-topaz border-2 border-dark-topaz md:px-8 px-2 py-3 rounded-2xl duration-150 transition-al hover:scale-105"
                >
                  Login
                </Link>
              </div>
            )}
            {/* toggel */}
            <button
              className={`md:hidden flex flex-col z-20 gap-1 transform transition-transform duration-300 cursor-pointer ${toggle ? "-translate-x-45" : " translate-0"}`}
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            >
              <span className="w-10 h-1 bg-dark-topaz rounded-2xl "></span>
              <span className="w-10 h-1 bg-dark-topaz rounded-2xl "></span>
              <span className="w-10 h-1 bg-dark-topaz rounded-2xl "></span>
            </button>
          </div>
        </div>
      </header>
      {/* Blurpage */}
      <div
        className={`${
          toggle ? "fixed inset-0 backdrop-blur-3xl z-20" : "hidden"
        }`}
        onClick={() => setToggle(false)}
      ></div>
    </>
  );
};

export default Header;
