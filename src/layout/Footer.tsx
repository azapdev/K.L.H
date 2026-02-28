import { Link } from "react-router-dom";
import { routes } from "../Routes/routes";

const Footer = () => {
  return (
    <footer>
      <div className="bg-rich-black w-full py-4">
        <Information />
        <hr />
        <Data />
        <hr />
        <End />
      </div>
    </footer>
  );
};

const Information = () => {
  return (
    <>
      <div className="mx-4 flex flex-col items-center justify-center gap-4 py-4">
        <p className="text-dark-topaz text-center text-xs md:text-sm">
          Your Optimal Choice
        </p>
        <h2 className="text-center text-sm text-white md:text-xl">
          Designed & developed by Ahmad Elazap.
        </h2>
        <Link
          to={routes.HOME}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="bg-shiny-red hover:text-shiny-red border-shiny-red cursor-pointer rounded-4xl px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-white md:text-lg"
        >
          Follow
        </Link>
      </div>
    </>
  );
};

const Data = () => {
  const quickLinks = [
    "Contact",
    "Partners",
    "Disclaimer",
    "Related Sites",
    "Consultations",
    "About",
  ];
  const services = [
    "Arbitration and Mediation",
    "Legal Follow-up",
    "Land and real estate",
  ];
  const contactInfo = [
    "a7mad3zap@gmail.com",
    "+20 1092672558",
    "Egypt, Gharbia, El Mahalla El Kubra - Bolqina",
  ];
  const social = [
    {
      icon: "fa-brands fa-facebook-f",
      href: "https://www.facebook.com/azapdev",
    },
    {
      icon: "fa-brands fa-instagram",
      href: "https://www.instagram.com/azapdev/",
    },
    {
      icon: "fa-brands fa-whatsapp",
      href: "https://wa.me/201092672558",
    },
  ];
  return (
    <>
      <div className="mx-8 flex max-w-6xl flex-col items-start justify-center gap-8 py-4 md:mx-auto md:flex-row">
        {/* 1rd */}
        <div className="max-w-sm">
          <p className="line-clamp-4 text-xs text-white">
            A specialized entity offering legal consulting solutions in the
            fields of advocacy, legal studies, and administration. We work with
            expertise and professionalism to support individuals and protect
            their rights.
          </p>
        </div>

        {/* 2rd */}
        <div className="flex flex-col gap-2 text-xs">
          <p className="text-dark-topaz my-2 text-xs">Quick Links</p>
          {quickLinks.map((item, index) => (
            <p
              key={index}
              className="hover:text-dark-topaz cursor-pointer text-white"
            >
              {item}
            </p>
          ))}
        </div>

        {/* 3rd */}
        <div className="flex flex-col gap-2 text-xs">
          <p className="text-dark-topaz my-2 text-xs">Services</p>
          {services.map((item, index) => (
            <p
              key={index}
              className="hover:text-dark-topaz cursor-pointer text-white"
            >
              {item}
            </p>
          ))}
        </div>
        {/* 4rd */}
        <div className="flex flex-col gap-2 text-xs">
          <p className="text-dark-topaz my-2 text-xs">ContactInfo</p>
          {contactInfo.map((item, index) => (
            <p
              key={index}
              className="hover:text-dark-topaz cursor-pointer text-white"
            >
              {item}
            </p>
          ))}
          {/* SOCIALS */}
          <div className="flex gap-4 text-xl">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="text-dark-topaz group rounded-2xl bg-slate-800 px-3 py-1 duration-150 hover:bg-black"
              >
                <i className={`${item.icon} group-hover:text-white`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const End = () => {
  return (
    <>
      <p className="py-1 text-center text-xs text-white">
        © 2026 All rights reserved.
      </p>
    </>
  );
};
export default Footer;
