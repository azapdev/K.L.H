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
      <div className="flex justify-center items-center flex-col gap-4 mx-4 py-4">
        <p className="md:text-sm text-xs text-dark-topaz text-center">
          Your Optimal Choice
        </p>
        <h2 className="md:text-xl text-sm text-white text-center">
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
          className=" md:text-lg text-sm font-bold rounded-4xl px-4 py-2 bg-shiny-red text-white hover:bg-white hover:text-shiny-red border-shiny-red transition-colors duration-300 cursor-pointer"
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
      <div className="flex md:flex-row flex-col items-start mx-8  max-w-6xl justify-center gap-8 md:mx-auto py-4">
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
          <p className="text-dark-topaz text-xs my-2">Quick Links</p>
          {quickLinks.map((item, index) => (
            <p
              key={index}
              className="text-white hover:text-dark-topaz cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>

        {/* 3rd */}
        <div className="flex flex-col gap-2 text-xs">
          <p className="text-dark-topaz text-xs my-2">Services</p>
          {services.map((item, index) => (
            <p
              key={index}
              className="text-white hover:text-dark-topaz cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
        {/* 4rd */}
        <div className="flex flex-col gap-2 text-xs">
          <p className="text-dark-topaz text-xs my-2">ContactInfo</p>
          {contactInfo.map((item, index) => (
            <p
              key={index}
              className="text-white hover:text-dark-topaz cursor-pointer"
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
                className="text-dark-topaz bg-slate-800 px-3 py-1 rounded-2xl group hover:bg-black duration-150 "
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
      <p className="text-center text-white py-1 text-xs">
        © 2026 All rights reserved.
      </p>
    </>
  );
};
export default Footer;
